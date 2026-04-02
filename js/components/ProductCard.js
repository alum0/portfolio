import { loadCart, saveCart } from '../modules/cart.js';

export const formatPrice = (value) => `${(Number(value) || 0).toLocaleString('uk-UA')}\u00A0₴`;

export const createProductCard = (p) => `
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
`;

export const attachAddToCartEvents = (updateCallback) => {
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
            saveCart(cart);
            if (updateCallback) updateCallback(true);
            btn.textContent = 'Додано';
            setTimeout(() => btn.textContent = 'У кошик', 1000);
        });
    });
};
