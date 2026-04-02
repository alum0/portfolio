const CART_KEY = 'florahome_cart_v1';

export const loadCart = () => JSON.parse(localStorage.getItem(CART_KEY)) || [];

export const saveCart = (items) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('cart-updated'));
};

export const updateCartBadge = (shouldPulse = false) => {
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
