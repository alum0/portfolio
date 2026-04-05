import { products } from './modules/products.js';
import { loadCart, saveCart, updateCartBadge } from './modules/cart.js';
import { createProductCard, attachAddToCartEvents, formatPrice } from './components/ProductCard.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. State Management
    let currentCategory = 'all';
    let currentPage = 1;
    let itemsPerPage = Number(localStorage.getItem('florahome_items_per_page')) || 4;

    const itemsPerPageSelect = document.getElementById('itemsPerPage');
    if (itemsPerPageSelect) {
        itemsPerPageSelect.value = itemsPerPage;
        itemsPerPageSelect.addEventListener('change', (e) => {
            itemsPerPage = Number(e.target.value);
            localStorage.setItem('florahome_items_per_page', itemsPerPage);
            currentPage = 1;
            renderProducts();
        });
    }

    // 2. UI Helpers
    const header = document.getElementById('main-header');
    const mobBtn = document.getElementById('mobile-cta');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleMenu = () => {
        const isOpen = mobBtn.classList.toggle('active');
        sidebar.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        mobBtn?.classList.remove('active');
        sidebar?.classList.remove('active');
        overlay?.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    };

    const isMobile = () => window.innerWidth <= 1366;

    if (mobBtn) mobBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Sidebar Accordion (Categories)
    const catToggle = document.querySelector('.nav-categories-toggle');
    if (catToggle) {
        catToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = catToggle.parentElement;
            parent.classList.toggle('active');
        });
    }

    // Sidebar Category Logic
    document.addEventListener('click', (e) => {
        const catBtn = e.target.closest('[data-category]');
        if (catBtn) {
            e.preventDefault();
            currentCategory = catBtn.dataset.category;
            currentPage = 1;
            if (isMobile()) closeMenu();

            const showcase = document.getElementById('showcase');
            if (showcase) {
                const offset = header ? header.offsetHeight : 20;
                window.scrollTo({ 
                    top: showcase.getBoundingClientRect().top + window.pageYOffset - offset, 
                    behavior: 'smooth' 
                });
            }
            renderProducts();
        }
    });



    // 3. Products Rendering
    const productGrid = document.querySelector('.product-grid');
    const paginationBase = document.querySelector('.pagination');

    const renderProducts = () => {
        if (!productGrid) return;
        const filtered = products.filter(p => currentCategory === 'all' || p.category === currentCategory);
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        const start = (currentPage - 1) * itemsPerPage;
        const pageItems = filtered.slice(start, start + itemsPerPage);
        productGrid.innerHTML = pageItems.map(p => createProductCard(p)).join('');
        renderPagination(totalPages);
        attachAddToCartEvents(updateCartBadge);
    };

    const renderPagination = (totalPages) => {
        if (!paginationBase) return;
        if (totalPages <= 1) {
            paginationBase.innerHTML = '';
            return;
        }
        const prevDis = currentPage === 1 ? ' disabled' : '';
        const nextDis = currentPage === totalPages ? ' disabled' : '';

        let btns = `<button class="page-btn page-nav" id="pg-prev"${prevDis}>&#8592; <span>Назад</span></button>`;
        for (let i = 1; i <= totalPages; i++) {
            btns += `<button class="page-btn${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
        }
        btns += `<button class="page-btn page-nav" id="pg-next"${nextDis}><span>Вперед</span> &#8594;</button>`;
        paginationBase.innerHTML = btns;

        const scrollToTop = () => window.scrollTo({ top: document.getElementById('showcase').offsetTop - 100, behavior: 'smooth' });

        paginationBase.querySelectorAll('.page-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', () => {
                currentPage = Number(btn.dataset.page);
                renderProducts();
                scrollToTop();
            });
        });

        paginationBase.querySelector('#pg-prev')?.addEventListener('click', () => {
            if (currentPage > 1) { currentPage--; renderProducts(); scrollToTop(); }
        });

        paginationBase.querySelector('#pg-next')?.addEventListener('click', () => {
            if (currentPage < totalPages) { currentPage++; renderProducts(); scrollToTop(); }
        });
    };

    // 4. Product Detail View
    const detailContainer = document.getElementById('product-detail');
    if (detailContainer) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = products.find(p => p.id === productId);

        if (product) {
            detailContainer.innerHTML = `
                <div class="product-detail-layout glass">
                    <img class="detail-image" src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://picsum.photos/seed/${product.id}/800/800'">
                    <div class="detail-content">
                        <span class="series-tag">${product.tag}</span>
                        <h1>${product.name}</h1>
                        <p class="price">${formatPrice(product.price)}</p>
                        <div class="detail-info">
                            <div class="info-group">
                                <h3>Склад букета</h3>
                                <p>${product.flowers}</p>
                            </div>
                            <div class="info-group">
                                <h3>Краще для</h3>
                                <p>${product.bestFor}</p>
                            </div>
                        </div>
                        <button class="btn-glow add-to-cart detail-add-btn" 
                                data-product-id="${product.id}"
                                data-product-name="${product.name}"
                                data-product-price="${product.price}"
                                data-product-image="${product.image}">Додати у кошик</button>
                    </div>
                </div>
            `;
            attachAddToCartEvents(updateCartBadge);
        } else {
            detailContainer.innerHTML = '<h2>Товар не знайдено</h2>';
        }
    }

    // 5. Cart Page
    const cartItemsEl = document.getElementById('cart-items');
    if (cartItemsEl) {
        const renderCartPage = () => {
            const cart = loadCart();
            if (!cart.length) {
                cartItemsEl.innerHTML = '<div class="glass" style="padding:4rem;text-align:center;"><h2>Ваш кошик порожній</h2><a href="index.html#showcase" class="btn-glow">До каталогу</a></div>';
                document.getElementById('cart-total').textContent = formatPrice(0);
                return;
            }
            cartItemsEl.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p class="seller">Продавець: FloraHome</p>
                    </div>
                    <div class="cart-item-controls">
                        <div class="qty-control">
                            <button class="qty-btn minus" data-id="${item.id}">−</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="qty-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <p class="item-total-price">${formatPrice(item.price * item.qty)}</p>
                        <button class="remove-item-text" data-id="${item.id}">Видалити</button>
                    </div>
                </div>
            `).join('');
            
            const updateQty = (id, delta) => {
                let c = loadCart();
                const item = c.find(x => x.id === id);
                if (item) {
                    item.qty += delta;
                    if (item.qty < 1) c = c.filter(x => x.id !== id);
                    saveCart(c);
                    renderCartPage();
                    updateCartBadge();
                }
            };

            document.querySelectorAll('.qty-btn.plus').forEach(btn => btn.addEventListener('click', () => updateQty(btn.dataset.id, 1)));
            document.querySelectorAll('.qty-btn.minus').forEach(btn => btn.addEventListener('click', () => updateQty(btn.dataset.id, -1)));
            
            document.querySelectorAll('.remove-item-text').forEach(btn => {
                btn.addEventListener('click', () => {
                    let c = loadCart().filter(x => x.id !== btn.dataset.id);
                    saveCart(c);
                    renderCartPage();
                    updateCartBadge();
                });
            });

            const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
            const totalEl = document.getElementById('cart-total');
            if (totalEl) totalEl.textContent = formatPrice(total);

            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) checkoutBtn.disabled = false;

            const clearBtn = document.getElementById('clear-cart-btn');
            if (clearBtn) {
                clearBtn.addEventListener('click', () => {
                    saveCart([]);
                    renderCartPage();
                    updateCartBadge();
                });
            }
        };
        renderCartPage();
    }

    // 6. Scroll Reveal
    const initScrollReveal = () => {
        const items = document.querySelectorAll('.reveal-on-scroll');
        if (!items.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        items.forEach(el => observer.observe(el));
    };

    window.addEventListener('cart-updated', () => updateCartBadge(true));

    renderProducts();
    updateCartBadge();
    initScrollReveal();
    setTimeout(initScrollReveal, 50);
});
