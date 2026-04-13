// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "Aged Cheddar",
        origin: "🇬🇧 İngiltere, Somerset",
        category: "sert",
        categoryLabel: "Sert Peynir",
        price: 285,
        oldPrice: null,
        unit: "250g",
        badge: "popular",
        image: "images/cheese_cheddar.png",
        description: "18 ay olgunlaştırılmış, keskin ve yoğun aromalı geleneksel İngiliz çedar peyniri. Kristalize dokusu ve karamelize notaları ile benzersiz bir deneyim.",
        features: ["18 Ay Olgun", "Pastörize Süt", "Glutensiz", "Kristalize Doku"]
    },
    {
        id: 2,
        name: "Brie de Meaux",
        origin: "🇫🇷 Fransa, Île-de-France",
        category: "yumusak",
        categoryLabel: "Yumuşak Peynir",
        price: 340,
        oldPrice: 390,
        unit: "200g",
        badge: "discount",
        image: "images/cheese_brie.png",
        description: "Kremsi iç dokusu ve beyaz kabuğuyla Fransa'nın en prestijli yumuşak peyniri. Mantar ve tereyağı notaları ile zarif bir tat profili.",
        features: ["AOP Sertifikalı", "Çiğ Süt", "Yumuşak Kabuk", "Kremsi Doku"]
    },
    {
        id: 3,
        name: "Gouda Reserve",
        origin: "🇳🇱 Hollanda, Zuid-Holland",
        category: "sert",
        categoryLabel: "Sert Peynir",
        price: 265,
        oldPrice: null,
        unit: "250g",
        badge: null,
        image: "images/cheese_gouda.png",
        description: "24 ay cave olgunlaştırması yapılmış premium Hollanda goudası. Karamel ve butterscotch notaları ile zengin ve derin bir tat.",
        features: ["24 Ay Olgun", "Pastörize Süt", "Doğal Kabuk", "Karamelize"]
    },
    {
        id: 4,
        name: "Parmigiano Reggiano",
        origin: "🇮🇹 İtalya, Emilia-Romagna",
        category: "sert",
        categoryLabel: "Sert Peynir",
        price: 420,
        oldPrice: null,
        unit: "200g",
        badge: "popular",
        image: "images/cheese_parmesan.png",
        description: "36 ay olgunlaştırılmış, DOP sertifikalı otantik İtalyan parmesanı. Umami tadı ve granüler dokusuyla peynirlerin kralı.",
        features: ["DOP Sertifikalı", "36 Ay Olgun", "Çiğ Süt", "Umami"]
    },
    {
        id: 5,
        name: "Roquefort",
        origin: "🇫🇷 Fransa, Aveyron",
        category: "kuflu",
        categoryLabel: "Küflü Peynir",
        price: 380,
        oldPrice: null,
        unit: "150g",
        badge: "new",
        image: "images/cheese_roquefort.png",
        description: "Doğal mağaralarda olgunlaştırılmış, koyun sütünden yapılmış efsanevi Fransız mavi peyniri. Yoğun, tuzlu ve kremsi.",
        features: ["AOP Sertifikalı", "Koyun Sütü", "Mağara Olgunlaştırma", "Mavi Küf"]
    },
    {
        id: 6,
        name: "Gruyère AOP",
        origin: "🇨🇭 İsviçre, Fribourg",
        category: "sert",
        categoryLabel: "Sert Peynir",
        price: 350,
        oldPrice: 395,
        unit: "250g",
        badge: "discount",
        image: "images/cheese_gruyere.png",
        description: "İsviçre Alplerinin otlaklarından elde edilen sütle yapılan geleneksel gruyère. Fondu ve gratenlerin vazgeçilmezi.",
        features: ["AOP Sertifikalı", "Çiğ Süt", "12 Ay Olgun", "Alp Otlakları"]
    },
    {
        id: 7,
        name: "Manchego Viejo",
        origin: "🇪🇸 İspanya, La Mancha",
        category: "sert",
        categoryLabel: "Sert Peynir",
        price: 295,
        oldPrice: null,
        unit: "200g",
        badge: null,
        image: "images/cheese_manchego.png",
        description: "Manchega koyun sütünden yapılan, 12 ay olgunlaştırılmış İspanyol peyniri. Fındıksı aroma ve hafif baharatlı dokunuşlar.",
        features: ["DOP Sertifikalı", "Koyun Sütü", "12 Ay Olgun", "Fındıksı Aroma"]
    },
    {
        id: 8,
        name: "Mozzarella di Bufala",
        origin: "🇮🇹 İtalya, Campania",
        category: "taze",
        categoryLabel: "Taze Peynir",
        price: 195,
        oldPrice: null,
        unit: "250g",
        badge: "new",
        image: "images/cheese_mozzarella.png",
        description: "Günlük taze üretilen, manda sütünden yapılmış otantik İtalyan mozzarellası. Sulu, süt kokulu ve elastik dokusu ile pizza'nın yıldızı.",
        features: ["DOP Sertifikalı", "Manda Sütü", "Günlük Taze", "El Yapımı"]
    },
    {
        id: 9,
        name: "Emmental",
        origin: "🇨🇭 İsviçre, Emmental Vadisi",
        category: "sert",
        categoryLabel: "Sert Peynir",
        price: 245,
        oldPrice: null,
        unit: "250g",
        badge: null,
        image: "images/cheese_emmental.png",
        description: "Karakteristik büyük delikleriyle ünlü İsviçre emmental peyniri. Hafif tatlı, fındıksı aroması ve yumuşak dokusu ile sevilen bir klasik.",
        features: ["AOP Sertifikalı", "Çiğ Süt", "4 Ay Olgun", "Fındıksı Tat"]
    },
    {
        id: 10,
        name: "Feta Premium",
        origin: "🇬🇷 Yunanistan, Epirus",
        category: "taze",
        categoryLabel: "Taze Peynir",
        price: 175,
        oldPrice: 210,
        unit: "200g",
        badge: "discount",
        image: "images/cheese_feta.png",
        description: "Koyun ve keçi sütü karışımından yapılan geleneksel Yunan beyaz peyniri. Tuzlu, ekşimsi ve ufalanan dokusuyla salataların vazgeçilmezi.",
        features: ["PDO Sertifikalı", "Koyun & Keçi Sütü", "Salamura Olgun", "Doğal"]
    },
    {
        id: 11,
        name: "Camembert de Normandie",
        origin: "🇫🇷 Fransa, Normandiya",
        category: "yumusak",
        categoryLabel: "Yumuşak Peynir",
        price: 310,
        oldPrice: null,
        unit: "250g",
        badge: "popular",
        image: "images/cheese_camembert.png",
        description: "Normandiya'nın çiğ sütünden yapılan otantik camembert. Beyaz kabuğu altında akan kremsi iç doku ve yoğun toprak kokuları.",
        features: ["AOP Sertifikalı", "Çiğ Süt", "21 Gün Olgun", "Beyaz Küf Kabuğu"]
    }
];

// ===== STORAGE MANAGER (Cookie + localStorage fallback) =====
const StorageManager = (() => {
    // Test if cookies are available (they don't work on file:// protocol)
    function cookiesAvailable() {
        try {
            document.cookie = "__cookie_test=1;SameSite=Lax";
            const hasCookie = document.cookie.indexOf("__cookie_test=") !== -1;
            document.cookie = "__cookie_test=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
            return hasCookie;
        } catch {
            return false;
        }
    }

    const useCookies = cookiesAvailable();

    // Cookie-based storage
    const cookieStore = {
        set(name, value, days = 30) {
            const expires = new Date();
            expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
            const encodedValue = encodeURIComponent(JSON.stringify(value));
            document.cookie = `${name}=${encodedValue};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
        },
        get(name) {
            const nameEQ = name + "=";
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
                cookie = cookie.trim();
                if (cookie.indexOf(nameEQ) === 0) {
                    try {
                        return JSON.parse(decodeURIComponent(cookie.substring(nameEQ.length)));
                    } catch {
                        return null;
                    }
                }
            }
            return null;
        },
        remove(name) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        }
    };

    // localStorage-based fallback
    const localStore = {
        set(name, value) {
            try {
                localStorage.setItem(name, JSON.stringify(value));
            } catch {
                // localStorage full or unavailable
            }
        },
        get(name) {
            try {
                const data = localStorage.getItem(name);
                return data ? JSON.parse(data) : null;
            } catch {
                return null;
            }
        },
        remove(name) {
            try {
                localStorage.removeItem(name);
            } catch {
                // ignore
            }
        }
    };

    console.log(`[Peynir Atölyesi] Depolama yöntemi: ${useCookies ? 'Cookie' : 'localStorage'}`);
    return useCookies ? cookieStore : localStore;
})();

// ===== CART CLASS =====
class ShoppingCart {
    constructor() {
        this.items = StorageManager.get('cheese_cart') || [];
        this.listeners = [];
    }

    _save() {
        StorageManager.set('cheese_cart', this.items);
        this._notify();
    }

    _notify() {
        this.listeners.forEach(fn => fn(this.items));
    }

    onChange(fn) {
        this.listeners.push(fn);
    }

    addItem(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return false;

        const existing = this.items.find(item => item.id === productId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                quantity: quantity
            });
        }
        this._save();
        return true;
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this._save();
    }

    updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            this.removeItem(productId);
            return;
        }
        const item = this.items.find(i => i.id === productId);
        if (item) {
            item.quantity = quantity;
            this._save();
        }
    }

    incrementItem(productId) {
        const item = this.items.find(i => i.id === productId);
        if (item) {
            item.quantity++;
            this._save();
        }
    }

    decrementItem(productId) {
        const item = this.items.find(i => i.id === productId);
        if (item) {
            if (item.quantity <= 1) {
                this.removeItem(productId);
            } else {
                item.quantity--;
                this._save();
            }
        }
    }

    getItem(productId) {
        return this.items.find(i => i.id === productId);
    }

    getSubtotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    getShipping() {
        const subtotal = this.getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= 500 ? 0 : 49;
    }

    getTotal() {
        return this.getSubtotal() + this.getShipping();
    }

    getTotalItems() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this._save();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// ===== TOAST SYSTEM =====
class ToastManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    show(message, type = 'success', duration = 3000) {
        const icons = {
            success: '✅',
            error: '❌',
            info: '🧀'
        };

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${icons[type]}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" aria-label="Kapat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        `;

        toast.querySelector('.toast-close').addEventListener('click', () => this._remove(toast));
        this.container.appendChild(toast);

        setTimeout(() => this._remove(toast), duration);
    }

    _remove(toast) {
        if (!toast || !toast.parentNode) return;
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }
}

// ===== FORMAT HELPERS =====
function formatPrice(price) {
    return '₺' + price.toLocaleString('tr-TR');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    const cart = new ShoppingCart();
    const toast = new ToastManager('toast-container');

    // DOM elements
    const header = document.getElementById('header');
    const cartBtn = document.getElementById('cart-btn');
    const cartCount = document.getElementById('cart-count');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartShipping = document.getElementById('cart-shipping');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const productsGrid = document.getElementById('products-grid');
    const filterBar = document.getElementById('filter-bar');
    const modalOverlay = document.getElementById('modal-overlay');
    const productModal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    const modalContent = document.getElementById('modal-content');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const contactForm = document.getElementById('contact-form');

    // ===== HEADER SCROLL =====
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    });

    // ===== MOBILE MENU =====
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== RENDER PRODUCTS =====
    function renderProducts() {
        productsGrid.innerHTML = '';
        products.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = `product-card`;
            card.dataset.category = product.category;
            card.dataset.id = product.id;
            card.style.animationDelay = `${index * 0.08}s`;

            let badgeHTML = '';
            if (product.badge) {
                const badgeLabels = { new: 'Yeni', popular: 'Popüler', discount: 'İndirimli' };
                badgeHTML = `<span class="product-badge badge-${product.badge}">${badgeLabels[product.badge]}</span>`;
            }

            let priceHTML = `<span class="price-current">${formatPrice(product.price)}</span>`;
            if (product.oldPrice) {
                priceHTML += `<span class="price-old">${formatPrice(product.oldPrice)}</span>`;
            }
            priceHTML += `<span class="price-unit">/ ${product.unit}</span>`;

            card.innerHTML = `
                ${badgeHTML}
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <button class="product-quick-view" data-id="${product.id}">Hızlı Görüntüle</button>
                </div>
                <div class="product-info">
                    <div class="product-category-label">${product.categoryLabel}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-origin">${product.origin}</div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">${priceHTML}</div>
                        <button class="add-to-cart-btn" data-id="${product.id}" id="add-to-cart-${product.id}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="12" y1="5" x2="12" y2="19"/>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                            </svg>
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        // Bind add-to-cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                const product = products.find(p => p.id === id);
                cart.addItem(id, 1);

                // Button feedback
                btn.classList.add('added');
                btn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Eklendi!
                `;
                setTimeout(() => {
                    btn.classList.remove('added');
                    btn.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        Sepete Ekle
                    `;
                }, 1500);

                toast.show(`<strong>${product.name}</strong> sepete eklendi!`, 'success');
            });
        });

        // Bind quick view buttons
        document.querySelectorAll('.product-quick-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                openProductModal(id);
            });
        });
    }

    renderProducts();

    // ===== FILTER =====
    filterBar.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-btn')) return;

        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filter = e.target.dataset.filter;
        const cards = productsGrid.querySelectorAll('.product-card');

        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'none';
                card.offsetHeight; // reflow
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });

    // Category cards click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const targetBtn = filterBar.querySelector(`[data-filter="${category}"]`);
            if (targetBtn) {
                targetBtn.click();
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== CART SIDEBAR =====
    function openCart() {
        cartOverlay.classList.add('active');
        cartSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cartOverlay.classList.remove('active');
        cartSidebar.classList.remove('active');
        document.body.style.overflow = '';
    }

    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // ===== RENDER CART =====
    function renderCart() {
        const items = cart.items;
        const totalItems = cart.getTotalItems();

        // Update count badge
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.classList.add('visible');
            cartCount.classList.remove('bump');
            void cartCount.offsetWidth; // reflow
            cartCount.classList.add('bump');
        } else {
            cartCount.classList.remove('visible');
        }

        // Toggle empty state
        if (cart.isEmpty()) {
            cartEmpty.classList.add('visible');
            cartFooter.classList.remove('visible');
            cartItemsContainer.innerHTML = '';
        } else {
            cartEmpty.classList.remove('visible');
            cartFooter.classList.add('visible');

            cartItemsContainer.innerHTML = '';
            items.forEach(item => {
                const el = document.createElement('div');
                el.className = 'cart-item';
                el.dataset.id = item.id;
                el.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)} <span style="color: var(--text-muted); font-weight: 400; font-size: 12px;">/ ${item.unit}</span></div>
                        <div class="cart-item-controls">
                            <button class="qty-btn qty-decrease" data-id="${item.id}" aria-label="Azalt">−</button>
                            <span class="cart-item-qty">${item.quantity}</span>
                            <button class="qty-btn qty-increase" data-id="${item.id}" aria-label="Arttır">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-id="${item.id}" aria-label="Kaldır">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                `;
                cartItemsContainer.appendChild(el);
            });

            // Update summary
            const subtotal = cart.getSubtotal();
            const shipping = cart.getShipping();
            const total = cart.getTotal();

            cartSubtotal.textContent = formatPrice(subtotal);
            cartShipping.textContent = shipping === 0 ? 'Ücretsiz 🎉' : formatPrice(shipping);
            cartTotal.textContent = formatPrice(total);

            // Bind qty buttons
            cartItemsContainer.querySelectorAll('.qty-decrease').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.dataset.id);
                    cart.decrementItem(id);
                });
            });

            cartItemsContainer.querySelectorAll('.qty-increase').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.dataset.id);
                    cart.incrementItem(id);
                });
            });

            cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.dataset.id);
                    const product = products.find(p => p.id === id);
                    const cartItem = btn.closest('.cart-item');
                    
                    cartItem.classList.add('removing');
                    setTimeout(() => {
                        cart.removeItem(id);
                        toast.show(`<strong>${product?.name || 'Ürün'}</strong> sepetten çıkarıldı`, 'info');
                    }, 300);
                });
            });
        }
    }

    // Listen for cart changes
    cart.onChange(renderCart);

    // Initial render
    renderCart();

    // Clear cart
    clearCartBtn.addEventListener('click', () => {
        if (cart.isEmpty()) return;
        cart.clear();
        toast.show('Sepet temizlendi', 'info');
    });

    // Checkout handler is defined in the auth section below (auth-aware order API)

    // ===== PRODUCT MODAL =====
    let modalQuantity = 1;

    function openProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        modalQuantity = 1;

        let priceHTML = `<div class="modal-price">${formatPrice(product.price)}</div>`;
        if (product.oldPrice) {
            priceHTML += `<div style="text-decoration: line-through; color: var(--text-muted); font-size: 16px; margin-top: -4px;">${formatPrice(product.oldPrice)}</div>`;
        }

        const featuresHTML = product.features.map(f => `<span class="modal-feature-tag">${f}</span>`).join('');

        modalContent.innerHTML = `
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <div class="modal-category">${product.categoryLabel}</div>
                <h2 class="modal-name">${product.name}</h2>
                <div class="modal-origin">${product.origin}</div>
                <p class="modal-description">${product.description}</p>
                <div class="modal-features">${featuresHTML}</div>
                <div class="modal-price-section">
                    ${priceHTML}
                    <div class="modal-price-unit">/ ${product.unit}</div>
                    <div class="modal-qty-row">
                        <div class="modal-qty-controls">
                            <button class="modal-qty-btn" id="modal-qty-decrease" aria-label="Azalt">−</button>
                            <span class="modal-qty-display" id="modal-qty-display">1</span>
                            <button class="modal-qty-btn" id="modal-qty-increase" aria-label="Arttır">+</button>
                        </div>
                        <button class="btn btn-primary modal-add-btn" id="modal-add-to-cart" data-id="${product.id}">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            <span>Sepete Ekle</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Bind modal qty
        const qtyDisplay = document.getElementById('modal-qty-display');
        document.getElementById('modal-qty-decrease').addEventListener('click', () => {
            if (modalQuantity > 1) {
                modalQuantity--;
                qtyDisplay.textContent = modalQuantity;
            }
        });
        document.getElementById('modal-qty-increase').addEventListener('click', () => {
            modalQuantity++;
            qtyDisplay.textContent = modalQuantity;
        });

        // Modal add to cart
        document.getElementById('modal-add-to-cart').addEventListener('click', () => {
            cart.addItem(product.id, modalQuantity);
            toast.show(`<strong>${product.name}</strong> x${modalQuantity} sepete eklendi!`, 'success');
            closeProductModal();
        });

        modalOverlay.classList.add('active');
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        modalOverlay.classList.remove('active');
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeProductModal);
    modalOverlay.addEventListener('click', closeProductModal);

    // ESC key closes modal & cart
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
            closeCart();
        }
    });

    // ===== CONTACT FORM =====
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        toast.show('Mesajınız başarıyla gönderildi! En kısa sürede size döneceğiz.', 'success', 4000);
        contactForm.reset();
    });

    // ===== SMOOTH SCROLL FOR NAV =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== INTERSECTION OBSERVER for animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .category-card, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== AUTH SYSTEM =====
    let currentUser = null;

    // Auth DOM elements
    const authNavButtons = document.getElementById('auth-nav-buttons');
    const userMenuWrapper = document.getElementById('user-menu-wrapper');
    const userMenuTrigger = document.getElementById('user-menu-trigger');
    const userAvatar = document.getElementById('user-avatar');
    const userDisplayName = document.getElementById('user-display-name');
    const navLoginBtn = document.getElementById('nav-login-btn');
    const navRegisterBtn = document.getElementById('nav-register-btn');
    const dropdownProfile = document.getElementById('dropdown-profile');
    const dropdownOrders = document.getElementById('dropdown-orders');
    const dropdownLogout = document.getElementById('dropdown-logout');

    // Auth Modal elements
    const authModalOverlay = document.getElementById('auth-modal-overlay');
    const authModal = document.getElementById('auth-modal');
    const authModalClose = document.getElementById('auth-modal-close');
    const authTabLogin = document.getElementById('auth-tab-login');
    const authTabRegister = document.getElementById('auth-tab-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginError = document.getElementById('login-error');
    const registerError = document.getElementById('register-error');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');

    // Profile Modal elements
    const profileModalOverlay = document.getElementById('profile-modal-overlay');
    const profileModal = document.getElementById('profile-modal');
    const profileModalClose = document.getElementById('profile-modal-close');
    const profileModalContent = document.getElementById('profile-modal-content');

    // Orders Modal elements
    const ordersModalOverlay = document.getElementById('orders-modal-overlay');
    const ordersModal = document.getElementById('orders-modal');
    const ordersModalClose = document.getElementById('orders-modal-close');
    const ordersModalContent = document.getElementById('orders-modal-content');

    // ===== AUTH API HELPERS =====
    async function apiCall(url, method = 'GET', data = null) {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin'
        };
        if (data) options.body = JSON.stringify(data);

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('API Error:', error);
            return { success: false, message: 'Sunucuya bağlanılamadı. Sunucunun çalıştığından emin olun.' };
        }
    }

    // ===== AUTH STATE =====
    function updateAuthUI() {
        if (currentUser) {
            authNavButtons.style.display = 'none';
            userMenuWrapper.style.display = 'block';
            userAvatar.textContent = currentUser.first_name.charAt(0).toUpperCase();
            userDisplayName.textContent = currentUser.first_name;
        } else {
            authNavButtons.style.display = '';
            userMenuWrapper.style.display = 'none';
        }
    }

    async function checkAuthState() {
        const result = await apiCall('/api/user');
        if (result.success && result.user) {
            currentUser = result.user;
        } else {
            currentUser = null;
        }
        updateAuthUI();
    }

    // Check auth state on page load
    checkAuthState();

    // ===== AUTH MODAL =====
    function openAuthModal(tab = 'login') {
        authModalOverlay.classList.add('active');
        authModal.classList.add('active');

        if (tab === 'register') {
            switchTab('register');
        } else {
            switchTab('login');
        }

        document.body.style.overflow = 'hidden';
        clearAuthErrors();
    }

    function closeAuthModal() {
        authModalOverlay.classList.remove('active');
        authModal.classList.remove('active');
        document.body.style.overflow = '';
        clearAuthErrors();
        loginForm.reset();
        registerForm.reset();
    }

    function switchTab(tab) {
        if (tab === 'login') {
            authTabLogin.classList.add('active');
            authTabRegister.classList.remove('active');
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
            document.getElementById('auth-title').textContent = 'Hoş Geldiniz';
            document.getElementById('auth-subtitle').textContent = 'Peynir Atölyesi hesabınıza giriş yapın';
        } else {
            authTabRegister.classList.add('active');
            authTabLogin.classList.remove('active');
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
            document.getElementById('auth-title').textContent = 'Hesap Oluştur';
            document.getElementById('auth-subtitle').textContent = 'Peynir Atölyesi\'ne katılın';
        }
        clearAuthErrors();
    }

    function clearAuthErrors() {
        loginError.classList.remove('visible');
        loginError.textContent = '';
        registerError.classList.remove('visible');
        registerError.textContent = '';
    }

    function showAuthError(element, message) {
        element.textContent = message;
        element.classList.add('visible');
    }

    // Event listeners
    navLoginBtn.addEventListener('click', () => openAuthModal('login'));
    navRegisterBtn.addEventListener('click', () => openAuthModal('register'));
    authModalClose.addEventListener('click', closeAuthModal);
    authModalOverlay.addEventListener('click', closeAuthModal);
    authTabLogin.addEventListener('click', () => switchTab('login'));
    authTabRegister.addEventListener('click', () => switchTab('register'));
    switchToRegister.addEventListener('click', (e) => { e.preventDefault(); switchTab('register'); });
    switchToLogin.addEventListener('click', (e) => { e.preventDefault(); switchTab('login'); });

    // ===== LOGIN FORM =====
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAuthErrors();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const submitBtn = document.getElementById('login-submit-btn');

        if (!email || !password) {
            showAuthError(loginError, 'Lütfen tüm alanları doldurun');
            return;
        }

        submitBtn.classList.add('loading');
        submitBtn.querySelector('span').textContent = 'Giriş yapılıyor...';

        const result = await apiCall('/api/login', 'POST', { email, password });

        submitBtn.classList.remove('loading');
        submitBtn.querySelector('span').textContent = 'Giriş Yap';

        if (result.success) {
            currentUser = result.user;
            updateAuthUI();
            closeAuthModal();
            toast.show(result.message, 'success');
        } else {
            showAuthError(loginError, result.message);
        }
    });

    // ===== REGISTER FORM =====
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAuthErrors();

        const first_name = document.getElementById('register-first-name').value.trim();
        const last_name = document.getElementById('register-last-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const phone = document.getElementById('register-phone').value.trim();
        const password = document.getElementById('register-password').value;
        const passwordConfirm = document.getElementById('register-password-confirm').value;
        const submitBtn = document.getElementById('register-submit-btn');

        if (!first_name || !last_name || !email || !password) {
            showAuthError(registerError, 'Lütfen zorunlu alanları doldurun');
            return;
        }

        if (password.length < 6) {
            showAuthError(registerError, 'Şifre en az 6 karakter olmalıdır');
            return;
        }

        if (password !== passwordConfirm) {
            showAuthError(registerError, 'Şifreler eşleşmiyor');
            return;
        }

        submitBtn.classList.add('loading');
        submitBtn.querySelector('span').textContent = 'Kayıt yapılıyor...';

        const result = await apiCall('/api/register', 'POST', {
            first_name, last_name, email, password, phone
        });

        submitBtn.classList.remove('loading');
        submitBtn.querySelector('span').textContent = 'Kayıt Ol';

        if (result.success) {
            currentUser = result.user;
            updateAuthUI();
            closeAuthModal();
            toast.show(result.message, 'success');
        } else {
            showAuthError(registerError, result.message);
        }
    });

    // ===== PASSWORD TOGGLE =====
    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
            } else {
                input.type = 'password';
                btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
            }
        });
    });

    // ===== USER MENU DROPDOWN =====
    userMenuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenuWrapper.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!userMenuWrapper.contains(e.target)) {
            userMenuWrapper.classList.remove('open');
        }
    });

    // ===== LOGOUT =====
    dropdownLogout.addEventListener('click', async () => {
        userMenuWrapper.classList.remove('open');
        const result = await apiCall('/api/logout', 'POST');
        currentUser = null;
        updateAuthUI();
        toast.show('Çıkış yapıldı. Tekrar bekleriz! 🧀', 'info');
    });

    // ===== PROFILE MODAL =====
    function openProfileModal() {
        if (!currentUser) return;
        userMenuWrapper.classList.remove('open');

        const initials = (currentUser.first_name.charAt(0) + currentUser.last_name.charAt(0)).toUpperCase();
        const createdDate = currentUser.created_at ? new Date(currentUser.created_at).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

        profileModalContent.innerHTML = `
            <div class="profile-header">
                <div class="profile-avatar-large">${initials}</div>
                <div class="profile-user-info">
                    <h3>${currentUser.first_name} ${currentUser.last_name}</h3>
                    <p>${currentUser.email}</p>
                    ${createdDate ? `<div class="member-since">Üyelik: ${createdDate}</div>` : ''}
                </div>
            </div>
            <div class="profile-tabs">
                <button class="profile-tab active" data-ptab="info">Bilgilerim</button>
                <button class="profile-tab" data-ptab="password">Şifre Değiştir</button>
            </div>
            <div class="profile-section active" id="profile-info-section">
                <form class="profile-form" id="profile-info-form">
                    <div class="auth-form-row">
                        <div class="auth-form-group">
                            <label>Ad</label>
                            <input type="text" id="profile-first-name" value="${currentUser.first_name}" required>
                        </div>
                        <div class="auth-form-group">
                            <label>Soyad</label>
                            <input type="text" id="profile-last-name" value="${currentUser.last_name}" required>
                        </div>
                    </div>
                    <div class="auth-form-group">
                        <label>E-posta</label>
                        <input type="email" value="${currentUser.email}" disabled style="opacity:0.5;">
                    </div>
                    <div class="auth-form-group">
                        <label>Telefon</label>
                        <input type="tel" id="profile-phone" value="${currentUser.phone || ''}" placeholder="05XX XXX XX XX">
                    </div>
                    <div class="auth-form-group">
                        <label>Adres</label>
                        <textarea id="profile-address" placeholder="Teslimat adresiniz">${currentUser.address || ''}</textarea>
                    </div>
                    <div class="profile-message" id="profile-info-message"></div>
                    <button type="submit" class="btn btn-primary auth-submit-btn" id="profile-save-btn">
                        <span>Kaydet</span>
                    </button>
                </form>
            </div>
            <div class="profile-section" id="profile-password-section">
                <form class="profile-form" id="profile-password-form">
                    <div class="auth-form-group">
                        <label>Mevcut Şifre</label>
                        <input type="password" id="profile-current-password" placeholder="Mevcut şifreniz" required>
                    </div>
                    <div class="auth-form-group">
                        <label>Yeni Şifre</label>
                        <input type="password" id="profile-new-password" placeholder="En az 6 karakter" required minlength="6">
                    </div>
                    <div class="auth-form-group">
                        <label>Yeni Şifre Tekrar</label>
                        <input type="password" id="profile-new-password-confirm" placeholder="Yeni şifrenizi tekrar girin" required>
                    </div>
                    <div class="profile-message" id="profile-password-message"></div>
                    <button type="submit" class="btn btn-primary auth-submit-btn" id="profile-password-btn">
                        <span>Şifre Güncelle</span>
                    </button>
                </form>
            </div>
        `;

        // Profile tabs
        profileModalContent.querySelectorAll('.profile-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                profileModalContent.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                profileModalContent.querySelectorAll('.profile-section').forEach(s => s.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`profile-${tab.dataset.ptab}-section`).classList.add('active');
            });
        });

        // Profile info form
        document.getElementById('profile-info-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const msgEl = document.getElementById('profile-info-message');
            msgEl.className = 'profile-message';

            const data = {
                first_name: document.getElementById('profile-first-name').value.trim(),
                last_name: document.getElementById('profile-last-name').value.trim(),
                phone: document.getElementById('profile-phone').value.trim(),
                address: document.getElementById('profile-address').value.trim()
            };

            const result = await apiCall('/api/user', 'PUT', data);
            if (result.success) {
                currentUser = result.user;
                updateAuthUI();
                msgEl.textContent = result.message;
                msgEl.className = 'profile-message success';
            } else {
                msgEl.textContent = result.message;
                msgEl.className = 'profile-message error';
            }
        });

        // Password change form
        document.getElementById('profile-password-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const msgEl = document.getElementById('profile-password-message');
            msgEl.className = 'profile-message';

            const current_password = document.getElementById('profile-current-password').value;
            const new_password = document.getElementById('profile-new-password').value;
            const confirm = document.getElementById('profile-new-password-confirm').value;

            if (new_password !== confirm) {
                msgEl.textContent = 'Yeni şifreler eşleşmiyor';
                msgEl.className = 'profile-message error';
                return;
            }

            const result = await apiCall('/api/user/password', 'PUT', { current_password, new_password });
            if (result.success) {
                msgEl.textContent = result.message;
                msgEl.className = 'profile-message success';
                document.getElementById('profile-password-form').reset();
            } else {
                msgEl.textContent = result.message;
                msgEl.className = 'profile-message error';
            }
        });

        profileModalOverlay.classList.add('active');
        profileModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProfileModal() {
        profileModalOverlay.classList.remove('active');
        profileModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    dropdownProfile.addEventListener('click', openProfileModal);
    profileModalClose.addEventListener('click', closeProfileModal);
    profileModalOverlay.addEventListener('click', closeProfileModal);

    // ===== ORDERS MODAL =====
    async function openOrdersModal() {
        if (!currentUser) return;
        userMenuWrapper.classList.remove('open');

        ordersModalContent.innerHTML = `
            <div class="orders-modal-header">
                <h3>📋 Siparişlerim</h3>
            </div>
            <div style="text-align:center; padding:32px; color:var(--text-muted);">Yükleniyor...</div>
        `;

        ordersModalOverlay.classList.add('active');
        ordersModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const result = await apiCall('/api/orders');

        if (result.success && result.orders) {
            if (result.orders.length === 0) {
                ordersModalContent.innerHTML = `
                    <div class="orders-modal-header">
                        <h3>📋 Siparişlerim</h3>
                    </div>
                    <div class="orders-empty">
                        <div class="orders-empty-icon">📦</div>
                        <p>Henüz siparişiniz yok</p>
                        <span>Lezzetli peynirlerimize göz atın!</span>
                    </div>
                `;
            } else {
                const ordersHTML = result.orders.map(order => {
                    const itemsHTML = order.items.map(item =>
                        `<li><span>${item.product_name} x${item.quantity}</span><span>₺${(item.unit_price * item.quantity).toLocaleString('tr-TR')}</span></li>`
                    ).join('');

                    const date = new Date(order.created_at).toLocaleDateString('tr-TR', {
                        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    });

                    const statusLabels = { beklemede: 'Beklemede', hazirlaniyor: 'Hazırlanıyor', tamamlandi: 'Tamamlandı' };

                    return `
                        <div class="order-card">
                            <div class="order-card-header">
                                <span class="order-id">Sipariş #${order.id}</span>
                                <span class="order-status ${order.status}">${statusLabels[order.status] || order.status}</span>
                            </div>
                            <ul class="order-items-list">${itemsHTML}</ul>
                            <div class="order-card-footer">
                                <span>${date}</span>
                                <span class="order-total">₺${order.total_amount.toLocaleString('tr-TR')}</span>
                            </div>
                        </div>
                    `;
                }).join('');

                ordersModalContent.innerHTML = `
                    <div class="orders-modal-header">
                        <h3>📋 Siparişlerim</h3>
                    </div>
                    <div class="orders-list">${ordersHTML}</div>
                `;
            }
        } else {
            ordersModalContent.innerHTML = `
                <div class="orders-modal-header">
                    <h3>📋 Siparişlerim</h3>
                </div>
                <div class="orders-empty">
                    <div class="orders-empty-icon">⚠️</div>
                    <p>Siparişler yüklenemedi</p>
                    <span>${result.message || 'Bir hata oluştu'}</span>
                </div>
            `;
        }
    }

    function closeOrdersModal() {
        ordersModalOverlay.classList.remove('active');
        ordersModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    dropdownOrders.addEventListener('click', openOrdersModal);
    ordersModalClose.addEventListener('click', closeOrdersModal);
    ordersModalOverlay.addEventListener('click', closeOrdersModal);

    // ===== CHECKOUT (AUTH-AWARE) =====
    checkoutBtn.addEventListener('click', async () => {
        if (cart.isEmpty()) return;

        if (!currentUser) {
            closeCart();
            openAuthModal('login');
            toast.show('Sipariş vermek için giriş yapmanız gerekiyor', 'info');
            return;
        }

        const checkoutBtnSpan = checkoutBtn.querySelector('span');
        checkoutBtnSpan.textContent = 'İşleniyor...';
        checkoutBtn.classList.add('loading');

        const orderData = {
            items: cart.items,
            total_amount: cart.getTotal(),
            shipping_cost: cart.getShipping()
        };

        const result = await apiCall('/api/orders', 'POST', orderData);

        checkoutBtnSpan.textContent = 'Siparişi Tamamla';
        checkoutBtn.classList.remove('loading');

        if (result.success) {
            toast.show(result.message, 'success', 5000);
            cart.clear();
            closeCart();
        } else {
            toast.show(result.message || 'Sipariş oluşturulamadı', 'error');
        }
    });

    // ===== ESC KEY - close auth modals too =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAuthModal();
            closeProfileModal();
            closeOrdersModal();
        }
    });
});
