const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Solid: 77% Cotton, 18% Polyester, 3% Nylon, 2% Elastane; Blocked: 68% Cotton, 27% Polyester, 3% Nylon, 2% Elastane',
            selectedVariant: 0,
            url: 'https://www.google.com/',
            details: ['50% cotton', '30% wool', '20%polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false },
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
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale;
        }
    }
});