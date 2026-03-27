/**
 * FloraHome - Core Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Products Data
    const products = [
        // --- Букет дня (4 items) ---
        { id: 'bd1', name: 'Ранковий Сюрприз', price: 1990, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd1.png', flowers: 'Троянди, альстромерія, зелень', bestFor: 'Будь-який привід, щоденна радість' },
        { id: 'bd2', name: 'Вечірній Акорд', price: 2290, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd2.png', flowers: 'Хризантеми, гербери, евкаліпт', bestFor: 'Подарунок без приводу, офіс' },
        { id: 'bd3', name: 'Полудень у Саду', price: 1750, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd3.png', flowers: 'Польові квіти, лаванда, ромашки', bestFor: 'Дача, природний інтер\'єр' },
        { id: 'bd4', name: 'Денний Шик', price: 2490, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd4.png', flowers: 'Піоноподібні троянди, ранункулюс', bestFor: 'День народження, зустріч' },
        // --- Троянди ---
        { id: 'p1', name: 'Багряна Пристрасть', price: 4500, category: 'roses', tag: 'КЛАСИКА', image: 'https://loremflickr.com/800/800/rose,red,bouquet?lock=1', flowers: 'Червоні троянди Freedom, евкаліпт', bestFor: 'Вітальня, романтична вечеря' },
        { id: 'p8', name: 'Нічне Сяйво', price: 4900, category: 'roses', tag: 'ПРЕМІУМ', image: 'https://loremflickr.com/800/800/dark,rose,bouquet?lock=2', flowers: 'Темні троянди, сріблястий бруній', bestFor: 'Чоловічий кабінет, вечірка' },
        { id: 'p11', name: 'Червона Магія', price: 4600, category: 'roses', tag: 'КЛАСИКА', image: 'https://loremflickr.com/800/800/red,rose,magic?lock=3', flowers: 'Троянди Red Naomi, гіперікум', bestFor: 'Ресторан, побачення' },
        { id: 'p18', name: 'Золотий Світанок', price: 6100, category: 'roses', tag: 'ПРЕМІУМ', image: 'https://loremflickr.com/800/800/yellow,rose,bouquet?lock=4', flowers: 'Золотисті троянди, аспарагус', bestFor: 'Урочистий зал, банкет' },
        { id: 'p24', name: 'Вогняні Троянди', price: 4700, category: 'roses', tag: 'ПРИСТРАСТЬ', image: 'https://loremflickr.com/800/800/cherry,rose,bouquet?lock=5', flowers: 'Троянди сорту Cherry Love', bestFor: 'Вечір при свічках' },
        { id: 'p29', name: 'Смарагдова Надія', price: 4400, category: 'roses', tag: 'ПРЕМІУМ', image: 'https://loremflickr.com/800/800/green,rose,bouquet?lock=6', flowers: 'Зелені троянди Jade, салал', bestFor: 'Офіс творчої студії' },
        // --- Тюльпани ---
        { id: 'p2', name: 'Весняний Світанок', price: 3200, category: 'tulips', tag: 'НІЖНІСТЬ', image: 'https://loremflickr.com/800/800/pastel,tulips?lock=7', flowers: 'Тюльпани мікс, анемони', bestFor: 'Спальня, світла кухня' },
        { id: 'p13', name: 'Сонячний Промінь', price: 3100, category: 'tulips', tag: 'ВЕСНА', image: 'https://loremflickr.com/800/800/yellow,tulips?lock=8', flowers: 'Жовті тюльпани, мімоза', bestFor: 'Сніданкова зона, дитяча' },
        { id: 'p19', name: 'Ранкова Роса', price: 3600, category: 'tulips', tag: 'ВЕСНА', image: 'https://loremflickr.com/800/800/white,tulips?lock=9', flowers: 'Білі тюльпани, вероніка', bestFor: 'Підвіконня, весняна кухня' },
        // --- Авторський ---
        { id: 'p3', name: 'Тропічний Рай', price: 5800, category: 'author', tag: 'ЕКЗОТИКА', image: 'https://loremflickr.com/800/800/protea,orchid?lock=10', flowers: 'Протея, орхідеї, стреліція', bestFor: 'Сучасний офіс, лобі' },
        { id: 'p6', name: 'Бузок та Півонії', price: 6500, category: 'author', tag: 'АВТОРСЬКИЙ', image: 'https://loremflickr.com/800/800/peonies,lilac?lock=11', flowers: 'Півонії, бузок, фрезія', bestFor: 'Світла вітальня, святковий стіл' },
        { id: 'p12', name: 'Лавандовий Сон', price: 3400, category: 'author', tag: 'РЕЛАКС', image: 'https://loremflickr.com/800/800/lavender,bouquet?lock=12', flowers: 'Лаванда, мускарі, дельфініум', bestFor: 'Ванна кімната, спальня' },
        { id: 'p17', name: 'Містичний Букет', price: 5900, category: 'author', tag: 'АРТ', image: 'https://loremflickr.com/800/800/calla,monstera?lock=13', flowers: 'Калли, антуріум, монстера', bestFor: 'Мистецька галерея, лофт' },
        { id: 'p25', name: 'Казковий Ліс', price: 5300, category: 'author', tag: 'ЗАОХОЧЕННЯ', image: 'https://loremflickr.com/800/800/fern,ranunculus?lock=14', flowers: 'Папороть, ранункулюси, мох', bestFor: 'Бібліотека, кабінет' },
        { id: 'p28', name: 'Королівський Букет', price: 8200, category: 'author', tag: 'ЕКСКЛЮЗИВ', image: 'https://loremflickr.com/800/800/castle,rose,bouquet?lock=15', flowers: 'Троянди Ohara, астільба, жасмин', bestFor: 'Головна вітальня замку' },
        // --- Моно/Дуо ---
        { id: 'p4', name: 'Соняшники', price: 2900, category: 'mono', tag: 'ЛІТО', image: 'https://loremflickr.com/800/800/sunflowers,bouquet?lock=16', flowers: 'Соняшники, декоративні злаки', bestFor: 'Тераса, заміський будинок' },
        { id: 'p7', name: 'Біла Симфонія', price: 3800, category: 'mono', tag: 'ЕЛЕГАНТНІСТЬ', image: 'https://loremflickr.com/800/800/white,rose,bouquet?lock=17', flowers: 'Білі троянди Avalon, лізіантус', bestFor: 'Класичний інтер\'єр, весілля' },
        { id: 'p14', name: 'Оксамитова Осінь', price: 4300, category: 'mono', tag: 'ТЕПЛО', image: 'https://loremflickr.com/800/800/autumn,dahlia?lock=18', flowers: 'Жоржини, хризантеми, ягоди', bestFor: 'Камінна зона, вітальня' },
        { id: 'p23', name: 'Білосніжна Лілія', price: 3900, category: 'mono', tag: 'ЧИСТОТА', image: 'https://loremflickr.com/800/800/white,lily,bouquet?lock=19', flowers: 'Лілії Casa Blanca, гіпсофіла', bestFor: 'Дуже світлий інтер\'єр' },
        { id: 'p26', name: 'Срібний Бриз', price: 4200, category: 'mono', tag: 'СУЧАСНІСТЬ', image: 'https://loremflickr.com/800/800/eucalyptus,bouquet?lock=20', flowers: 'Евкаліпт Срібний долар, брунія', bestFor: 'Хай-тек інтер\'єр' },
        // --- Квіти в коробці ---
        { id: 'p5', name: 'Рожева Хмара', price: 4100, category: 'box', tag: 'РОМАНТИКА', image: 'https://loremflickr.com/800/800/pink,flowers,box?lock=21', flowers: 'Гортензія, півонієподібні троянди', bestFor: 'Туалетний столик, подарунок' },
        { id: 'p15', name: 'Діамантова Коробка', price: 7500, category: 'box', tag: 'ЛЮКС', image: 'https://loremflickr.com/800/800/luxury,roses,box?lock=22', flowers: 'Півонії Сара Бернар, кущові троянди', bestFor: 'Ювілей, особлива подія' },
        { id: 'p21', name: 'Червоний Оксамит', price: 4800, category: 'box', tag: 'ЕЛЕГАНТНІСТЬ', image: 'https://loremflickr.com/800/800/red,roses,box?lock=23', flowers: 'Троянди, гвоздики, стрічки', bestFor: 'Подарунок керівнику' },
        { id: 'p30', name: 'Квітковий Десерт', price: 3500, category: 'box', tag: 'МІНІ', image: 'https://loremflickr.com/800/800/macarons,flowers?lock=24', flowers: 'Кущові троянди, макаруни', bestFor: 'Кавовий столик' },
        // --- Кошики ---
        { id: 'p10', name: 'Кошик Щастя', price: 5200, category: 'basket', tag: 'ПОДАРУНОК', image: 'https://loremflickr.com/800/800/flowers,basket?lock=25', flowers: 'Альстромерії, хризантеми, гербери', bestFor: 'Передпокій, затишна кухня' },
        { id: 'p22', name: 'Квіткова Карусель', price: 5500, category: 'basket', tag: 'ЯСКРАВІСТЬ', image: 'https://loremflickr.com/800/800/colorful,gerberas,basket?lock=26', flowers: 'Різнокольорові гербери, солідаго', bestFor: 'День народження, дитяче свято' },
        // --- Еко ---
        { id: 'p9', name: 'Еко-Гармонія', price: 2700, category: 'eco', tag: 'ЕКО', image: 'https://loremflickr.com/800/800/dry,flowers,eco?lock=27', flowers: 'Бавовна, сухоцвіти, евкаліпт', bestFor: 'Скандинавський стиль, робочий стіл' },
        { id: 'p16', name: 'Гірська Свіжість', price: 2800, category: 'eco', tag: 'ЕКО', image: 'https://loremflickr.com/800/800/mountain,flowers,eco?lock=28', flowers: 'Едельвейс, гірські трави', bestFor: 'Дерев\'яний інтер\'єр, балкон' },
        { id: 'p20', name: 'Польова Пісня', price: 2500, category: 'eco', tag: 'НАТУРАЛЬНІСТЬ', image: 'https://loremflickr.com/800/800/field,flowers,eco?lock=29', flowers: 'Ромашки, волошки, маки', bestFor: 'Дача, обідній стіл' },
        { id: 'p27', name: 'Океанський Вітер', price: 3700, category: 'eco', tag: 'СВІЖІСТЬ', image: 'https://loremflickr.com/800/800/sea,flowers,eco?lock=30', flowers: 'Ерінгіум, декоративна капуста', bestFor: 'Ванна кімната, хол' }
    ];

    // 2. State Management
    let currentCategory = 'all';
    let currentPage = 1;
    let itemsPerPage = 4;

    // 3. UI Helpers
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
        mobBtn.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
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

            // Scroll to catalog title
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

    const itemsPerPageSelect = document.getElementById('itemsPerPage');
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', (e) => {
            itemsPerPage = Number(e.target.value);
            currentPage = 1;
            renderProducts();
        });
    }

    // 4. Products Rendering
    const productGrid = document.querySelector('.product-grid');
    const paginationBase = document.querySelector('.pagination');

    const formatPrice = (value) => `${(Number(value) || 0).toLocaleString('uk-UA')}\u00A0₴`;

    const renderProducts = () => {
        if (!productGrid) return;

        const filtered = products.filter(p => currentCategory === 'all' || p.category === currentCategory);
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        
        const start = (currentPage - 1) * itemsPerPage;
        const pageItems = filtered.slice(start, start + itemsPerPage);

        productGrid.innerHTML = pageItems.map(p => `
            <div class="product-card glass">
                <a href="product.html?id=${p.id}" class="product-link">
                    <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/${p.id}/600/700'">
                </a>
                <div class="product-content">
                    <span class="series-tag">${p.tag}</span>
                    <a href="product.html?id=${p.id}" class="product-title-link">
                        <h3>${p.name}</h3>
                    </a>
                    <p class="price">${formatPrice(p.price)}</p>
                    <button class="btn-glow add-to-cart" 
                            data-product-id="${p.id}"
                            data-product-name="${p.name}"
                            data-product-price="${p.price}"
                            data-product-image="${p.image}">У кошик</button>
                </div>
            </div>
        `).join('');

        renderPagination(totalPages);
        attachAddToCartEvents();
    };

    const renderPagination = (totalPages) => {
        if (!paginationBase) return;
        if (totalPages <= 1) {
            paginationBase.innerHTML = '';
            return;
        }

        const prevDis = currentPage === 1 ? ' disabled' : '';
        const nextDis = currentPage === totalPages ? ' disabled' : '';

        let btns = `<button class="page-btn page-nav" id="pg-prev"${prevDis}>&#8592; Назад</button>`;
        for (let i = 1; i <= totalPages; i++) {
            btns += `<button class="page-btn${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
        }
        btns += `<button class="page-btn page-nav" id="pg-next"${nextDis}>Вперед &#8594;</button>`;
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


    // 5. Cart Persistence
    const CART_KEY = 'florahome_cart_v1';
    const loadCart = () => JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const saveCart = (items, shouldPulse = false) => {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
        updateCartBadge(shouldPulse);
    };

    const updateCartBadge = (shouldPulse = false) => {
        const cart = loadCart();
        const total = cart.reduce((s, x) => s + x.qty, 0);
        document.querySelectorAll('a[href="cart.html"]').forEach(link => {
            let badge = link.querySelector('.cart-badge');
            if (total > 0) {
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'cart-badge';
                    link.appendChild(badge);
                }
                badge.textContent = total;
                if (shouldPulse) {
                    badge.classList.add('pulse');
                    setTimeout(() => badge.classList.remove('pulse'), 600);
                }
            } else if (badge) badge.remove();
        });
    };

    const attachAddToCartEvents = () => {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.productId;
                let cart = loadCart();
                const idx = cart.findIndex(x => x.id === id);
                if (idx > -1) cart[idx].qty++;
                else {
                    cart.push({
                        id,
                        name: btn.dataset.productName,
                        price: Number(btn.dataset.productPrice),
                        image: btn.dataset.productImage,
                        qty: 1
                    });
                }
                saveCart(cart, true);
                btn.textContent = 'Додано';
                setTimeout(() => btn.textContent = 'У кошик', 1000);
            });
        });
    };

    // 6. Product Detail View
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
            attachAddToCartEvents();
        } else {
            detailContainer.innerHTML = '<h2>Товар не знайдено</h2>';
        }
    }

    // 7. Cart Page
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
                    <img src="${item.image}" alt="${item.name}" style="width:80px;height:80px;border-radius:10px;object-fit:cover;">
                    <div style="flex:1;">
                        <h3>${item.name}</h3>
                        <p>${formatPrice(item.price)} x ${item.qty}</p>
                    </div>
                    <button class="btn-outline remove-item" data-id="${item.id}">X</button>
                </div>
            `).join('');
            
            const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
            document.getElementById('cart-total').textContent = formatPrice(total);

            // Enable checkout if cart has items
            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) checkoutBtn.disabled = false;
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    let c = loadCart().filter(x => x.id !== btn.dataset.id);
                    saveCart(c);
                    renderCartPage();
                });
            });

            const clearBtn = document.getElementById('clear-cart-btn');
            if (clearBtn) {
                clearBtn.addEventListener('click', () => {
                    saveCart([]);
                    renderCartPage();
                });
            }
        };
        renderCartPage();
    }

    // 8. Scroll Reveal (IntersectionObserver)
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

    // Init
    renderProducts();
    updateCartBadge();
    initScrollReveal();
    // Re-run after products render so dynamically added cards are observed
    setTimeout(initScrollReveal, 50);
});

