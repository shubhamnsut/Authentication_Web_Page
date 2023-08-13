<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.spinner-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
    /* Size */
    height: 4rem;
    width: 4rem;

    /* Create a curve at the top */
    border: 4px solid #d1d5db;
    border-top-color: #000;
    border-radius: 50%;

    animation: spinner 800ms linear infinite;
}

@keyframes spinner {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
