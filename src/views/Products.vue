<template>
    <Loading v-if="isLoading" />
    <div v-else class="products__wrapper">
            <router-link class="product-link" v-for="product in products" :key="product.id" :to="{ name: 'ProductDetails', params: { id: product.id, slug: `${product.title.split(' ').join('-')}-details` } }
            ">
                <div class="product__container">
                    <img class="product__img" :src="product.thumbnail" alt="">
                    <div class="detail">
                        <p class="product-name">{{ product.brand }}</p>
                        <div class="category-price">
                            <span class="category">{{ product.category }}</span>

                            <div class="price-box">
                                <span class="price price-main">${{ product.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </router-link>
    </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
    components: {Loading},
    name: 'Products',
    data() {
        return {
            products: null,
            isLoading: true,
        }
    },
    methods: {

    },
    computed: {
        discountedPrice() {
            return (product) => {

                return product.price - (product.discountPercentage * product.price)
            }
        }
    },
    created() {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.products = data.products;

            })
            .catch(error => console.log(error)).finally(()=>{
                this.isLoading = false;
            })
    }
}
</script>

<style>

.product-link {
    text-decoration: none;
    color: #000;
}

.products__wrapper {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    margin: 30px auto;
    
}


 .product__container {
    width: 312px;
    height: 478px;
} 

.product__container a {
    display: block;
    padding: 0;
    margin: 0;
}

.product__img {
   width: 100%;
    height: 400px;
    object-fit: cover;
}

.category{
    color: gray;
}

.price-main {
    font-weight: bold;
}

.product-name {
    text-align: left;
}

.detail {
    font-size: .9rem;
}

.category-price {
    display: flex;
    justify-content: space-between;
}
</style>