const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'Solid: 77% Cotton, 18% Polyester, 3% Nylon, 2% Elastane; Blocked: 68% Cotton, 27% Polyester, 3% Nylon, 2% Elastane',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com/',
            inventory: 100,
            onSale: true
        }
    }
})