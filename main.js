const app = Vue.createApp({
    data: function() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addIdToCart(id) {
            this.cart.push(id);
        },
        removeIdFromCart(id) {
            let indexOfDeletion = this.cart.indexOf(id);
            if(indexOfDeletion >= 0) {
                this.cart.splice(this.cart.indexOf(id), 1);
            } else {
                console.log("Item not in cart!");
            }
        }
    }
});