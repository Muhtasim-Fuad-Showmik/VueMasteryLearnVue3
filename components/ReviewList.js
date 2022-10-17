app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
        <div class="review-container">
            <h3>Reviews:</h3>
            <ul>
            <li v-for="(review, index) in reviews" :key="index" >
                {{ review.name }} gives this {{ review.rating }} stars
                <br/>
                and {{ review.recommendation === '1' ? "does not recommend" : "recommends" }} this product.
                <br/>
                "{{ review.review }}"
            </li>
            </ul>
        </div>
    `
});