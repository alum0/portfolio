/* 
   LuxeHome Interactivity & Mobile Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Scroll Effects for Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal animation to elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Subtle Mouse Parallax for Hero
    const hero = document.getElementById('hero');
    if (hero && window.innerWidth > 1024) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 60;
            const moveY = (clientY - window.innerHeight / 2) / 60;

            const overlay = document.querySelector('.hero-background-overlay');
            if (overlay) {
                overlay.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
            }
        });
    }

    // 4. Menu (desktop + mobile)
    const mobileBtn = document.getElementById('mobile-cta');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const isMobile = () => window.innerWidth <= 768;

    let scrollY = 0;

    // Desktop: sidebar open by default, toggle closed/open
    // Mobile: sidebar closed by default, toggle open/closed with overlay

    const isOpen = () => {
        if (isMobile()) {
            return sidebar.classList.contains('open');
        } else {
            return !sidebar.classList.contains('closed');
        }
    };

    const openMenu = () => {
        mobileBtn.classList.add('active');
        if (isMobile()) {
            sidebar.classList.add('open');
            if (overlay) overlay.classList.add('active');
            scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
            document.body.style.overscrollBehavior = 'none';
        } else {
            sidebar.classList.remove('closed');
            document.body.classList.remove('sidebar-closed');
        }
    };

    const closeMenu = () => {
        mobileBtn.classList.remove('active');
        if (isMobile()) {
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            document.body.style.overscrollBehavior = '';
            window.scrollTo(0, scrollY);
        } else {
            sidebar.classList.add('closed');
            document.body.classList.add('sidebar-closed');
        }
    };

    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
            if (isOpen()) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Close on overlay click (mobile only)
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Close menu when a nav link is clicked (mobile only)
    document.querySelectorAll('#sidebar .nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile()) closeMenu();
        });
    });

    // On resize: reset state to match device
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            // restore desktop state: remove mobile classes
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
        } else {
            // restore mobile state: remove desktop closed
            sidebar.classList.remove('closed');
            document.body.classList.remove('sidebar-closed');
            mobileBtn.classList.remove('active');
        }
    });

    // 5. Smooth Internal Links for Single Page Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Cart (localStorage) - add items & render cart page
    const CART_KEY = 'florahome_cart_v1';

    const loadCart = () => {
        try {
            const raw = localStorage.getItem(CART_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    };

    const saveCart = (items) => {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(items));
        } catch (e) {
            // ignore storage errors
        }
    };

    const formatPrice = (value) => {
        const n = Number(value) || 0;
        return `${n.toLocaleString('uk-UA')} ₴`;
    };

    const addItemToCart = (payload) => {
        const cart = loadCart();
        const existing = cart.find(x => x.id === payload.id);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({
                id: payload.id,
                name: payload.name,
                price: Number(payload.price) || 0,
                image: payload.image || '',
                qty: 1,
            });
        }

        saveCart(cart);
        return cart;
    };

    // Add-to-cart buttons (index page)
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const cart = addItemToCart({
                id: btn.dataset.productId,
                name: btn.dataset.productName,
                price: btn.dataset.productPrice,
                image: btn.dataset.productImage
            });

            // Small UX: briefly change button text
            const originalText = btn.textContent;
            btn.textContent = 'Додано';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 900);
        });
    });

    // Cart page rendering
    const cartItemsEl = document.getElementById('cart-items');
    if (cartItemsEl) {
        const cartEmptyEl = document.getElementById('cart-empty');
        const cartTotalEl = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');
        const clearBtn = document.getElementById('clear-cart-btn');

        const renderCart = () => {
            const cart = loadCart();

            if (!cart.length) {
                if (cartEmptyEl) cartEmptyEl.style.display = 'block';
                if (cartItemsEl) cartItemsEl.innerHTML = '';
                if (cartTotalEl) cartTotalEl.textContent = formatPrice(0);
                if (checkoutBtn) checkoutBtn.disabled = true;
                return;
            }

            if (cartEmptyEl) cartEmptyEl.style.display = 'none';

            cartItemsEl.innerHTML = cart.map(item => {
                const lineTotal = item.price * item.qty;
                return `
                    <div class="cart-item" data-product-id="${item.id}">
                        <div class="cart-item-left">
                            ${item.image ? `<img class="cart-item-img" src="${item.image}" alt="${item.name}">` : ''}
                            <div class="cart-item-meta">
                                <div class="cart-item-name" title="${item.name}">${item.name}</div>
                                <div class="cart-item-price">${formatPrice(item.price)}</div>
                            </div>
                        </div>

                        <div class="cart-item-right">
                            <div class="cart-qty">
                                <button class="cart-qty-btn" type="button" data-cart-action="dec" data-product-id="${item.id}" aria-label="Зменшити кількість">−</button>
                                <input class="cart-qty-input" type="number" min="1" step="1"
                                    value="${item.qty}"
                                    data-cart-action="set-qty"
                                    data-product-id="${item.id}"
                                    aria-label="Кількість">
                                <button class="cart-qty-btn" type="button" data-cart-action="inc" data-product-id="${item.id}" aria-label="Збільшити кількість">+</button>
                            </div>
                            <div class="cart-line-total">${formatPrice(lineTotal)}</div>
                            <button class="cart-remove-btn" type="button" data-cart-action="remove" data-product-id="${item.id}">Видалити</button>
                        </div>
                    </div>
                `;
            }).join('');

            if (cartTotalEl || checkoutBtn) {
                const total = cart.reduce((sum, x) => sum + x.price * x.qty, 0);
                if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);
                if (checkoutBtn) checkoutBtn.disabled = false;
            }
        };

        cartItemsEl.addEventListener('click', (e) => {
            const actionBtn = e.target.closest('[data-cart-action]');
            if (!actionBtn) return;

            const id = actionBtn.dataset.productId;
            const action = actionBtn.dataset.cartAction;

            const cart = loadCart();
            const item = cart.find(x => x.id === id);
            if (!item) return;

            if (action === 'remove') {
                const updated = cart.filter(x => x.id !== id);
                saveCart(updated);
            } else if (action === 'inc') {
                item.qty += 1;
                saveCart(cart);
            } else if (action === 'dec') {
                item.qty -= 1;
                if (item.qty <= 0) {
                    saveCart(cart.filter(x => x.id !== id));
                } else {
                    saveCart(cart);
                }
            }

            renderCart();
        });

        cartItemsEl.addEventListener('change', (e) => {
            const input = e.target;
            if (!input || input.dataset.cartAction !== 'set-qty') return;

            const id = input.dataset.productId;
            const qty = Math.max(1, parseInt(input.value, 10) || 1);

            const cart = loadCart();
            const item = cart.find(x => x.id === id);
            if (!item) return;

            item.qty = qty;
            saveCart(cart);
            renderCart();
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                saveCart([]);
                renderCart();
            });
        }

        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                const cart = loadCart();
                if (!cart.length) return;
                alert('Замовлення оформлено (демо).');
            });
        }

        renderCart();
    }
});
