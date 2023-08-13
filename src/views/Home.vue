<template>
    <div class="btn-section">
       <router-link to="/login" class="link-btn">Login</router-link>
       <router-link to="/signup" class="link-btn">Signup</router-link>
    </div>
</template>

<script>
    export default{
        name: 'Home',
        data(){
            return {}
        }
        
    }
</script>

<style>
    .btn-section{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 60px);
        width: 100vw;
    }
    .link-btn {
        display: block;
        width: 200px;
        height: 70px;
        color: #000;
        padding: 15px;
        background-color: #fff;
        border: 1px solid #000;
        font-size: 2rem;
        border: 2px solid black; /* Border with 1px width and black color */
        border-radius: 5px; /* Border radius */
    }

    .link-btn:hover{
        background-color: #000;
        color: #fff;
        
    }
    .link-btn:first-of-type{
        margin-bottom: 20px;
    }

    
</style>