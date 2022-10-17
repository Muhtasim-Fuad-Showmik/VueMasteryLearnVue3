app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-img': !inStock }" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-show="onSale">{{ title }} is on sale</p>
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock > 0">Almost sold out</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>

                <p>{{ description }}</p>
                <product-details :details="details"></product-details>
                <a :href="url">Google</a>
                <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                    class="color-circle" :style="{ backgroundColor: variant.color }">
                </div>
                <div v-for="size in sizes">{{size}}</div>

                <buton class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">
                    Add to Cart
                </buton>
                <button class="button" @click="removeFromCart">Remove from Cart</button>
            </div>
        </div>
    </div>`,
    data: function() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Solid: 77% Cotton, 18% Polyester, 3% Nylon, 2% Elastane; Blocked: 68% Cotton, 27% Polyester, 3% Nylon, 2% Elastane',
            selectedVariant: 0,
            url: 'https://www.google.com/',
            details: [
                'Solid: 77% Cotton',
                '18% Polyester',
                '3% Nylon',
                '2% Elastane',
                'Blocked: 68% Cotton',
                '27% Polyester',
                '3% Nylon',
                '2% Elastane'
            ],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false },
            ],
            sizes: [ 'S', 'M' ]
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
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
        },
        shipping() {
            if(this.premium){
                return 'Free';
            }
            return '2.99';
        }
    }
});