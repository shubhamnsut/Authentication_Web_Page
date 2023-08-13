<template>
    <div class="product-detail-container">
    <div class="img-block">
        <img class="product-img" :src="product.thumbnail" alt="">
    </div>
  
  <div class="p-detail">
    <p class="p-title">
      {{ product.title}}
    
    </p>
    <hr class="hr">
    <p class="p-price">${{ product.price }}</p>
    
    <p class="p-description">{{ product.description }}</p>
    
  </div>
</div>
</template>

<script>
    export default {
        name: "ProductDetails",
        data(){
           return { 
            product: null,
        }
        },
        computed: {
            productId(){
                return parseInt(this.$route.params.id);
            }
        },
        created() {

fetch(`https://dummyjson.com/products/${this.productId}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        this.product = data;

    })
    .catch(error => console.log(error)).finally(()=>{
        this.isLoading = false;
    })
}
    }
</script>

<style scoped>
    .product-img {
  display: block;
}
.product-img, .p-detail {
  width: 90%;
  margin: auto;
}


.p-title {
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 0;
}

.hr {
  width: 60px;
  left: 0;
  margin-left: 0;
  /* margin-top: -15px; */
  background-color: #000;
  display: block;
  
}

.p-title, .p-price, .p-detail {
    text-align: left;
}

.p-price {
  color: grey;
}

@media screen and (min-width: 760px){
  .product-detail-container{
    display: flex;
    gap: 20px;
  }
  .p-detail {
    margin: 0 auto;
  }

  
}
</style>