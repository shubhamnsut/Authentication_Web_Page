<template>
    <div class="nav-bar">
        <nav class="nav">
            <div><router-link class="logo" to="/">FuelBuddy</router-link></div>
           <div class="menu-toggle ">
            <i @click="toggleMenu" :class="menuClass"></i>
            
           </div>
           
           <div class="nav-area" :class="displayClass">
            <div class="link-box">
                <router-link @click="toggleMenu" to="/home" class="nav-link">Home</router-link>
                <router-link @click="toggleMenu" to="/login" class="nav-link" v-if="!isLoggedIn">Login</router-link>
                <router-link @click="toggleMenu" to="/signup" class="nav-link" v-if="!isLoggedIn">Sign up</router-link>
                <router-link @click="toggleMenu" to="/dashboard" class="nav-link">Dashboard</router-link>
                 
              <router-link @click="toggleMenu" to='/home' @click.prevent="handleSignOut" v-if="isLoggedIn" class="nav-link">Log Out</router-link>
            </div>
           </div>
        </nav>
        </div>
</template>

<script>
    export default{
        name: 'TheNavigation',
        props:['handleSignOut', 'isLoggedIn'],

        data(){
            return {
                isMenuOpen: false
            }
        },
        methods: {
            toggleMenu(){
                console.log("menu open");
                return  this.isMenuOpen = !this.isMenuOpen;
            }
        },
        computed: {
            menuClass(){
                return this.isMenuOpen ? "fa-solid fa-xmark":"fa-solid fa-bars";
            },

            displayClass() {
    const mq = window.matchMedia("(min-width: 760px)");
    return this.isMenuOpen || mq.matches ? "show-nav" : "no-display";
  },


        }
    }
</script>


<style>

.nav-bar {
  background-color: var(--base-text-color);
  color: #fff;
  font-weight: 100;
  height: 60px;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
}

.nav {
    height: 100%;
    width: 100%;
    background-color:grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
}

nav a {
  display: block;
}

.logo{
    font-weight: 100;
    color: #fff;
    font-weight: bold;
    font-size: 1.3rem;
    
}

.nav-area {
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    height: 200px;
    background-color:grey;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;

}

.nav-area a{
    color: #fff;
    text-decoration: none;
}

.no-display {
    display: none;
}

.show-nav{
    display: flex;
}

.nav-link {
    display: block;
    margin-bottom: 10px;
    text-align: center;
}

@media screen and (min-width: 760px){
    .nav-area{
        position:initial;
        height: inherit;
        width: initial;
        justify-content: unset;
       
    }
    .nav-link{
        display: initial;
        margin-bottom: unset;
        margin-right: 20px;
    }

    .menu-toggle {
        display: none;
    }
  
    
}


</style>