const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'Solid: 77% Cotton, 18% Polyester, 3% Nylon, 2% Elastane; Blocked: 68% Cotton, 27% Polyester, 3% Nylon, 2% Elastane',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            url: 'https://www.google.com/',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20%polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes: [ 'S', 'M' ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    }
});