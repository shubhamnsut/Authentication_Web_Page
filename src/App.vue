<template>
<TheNavigation :handleSignOut="handleSignOut" :isLoggedIn="isLoggedIn" />
<router-view></router-view>

</template>

<script>
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {TheNavigation},
  name: 'App',
  data(){
    return {
      isLoggedIn: false,
    }
  },
  methods: {
    handleSignOut(){
      signOut(getAuth())
      .then(()=> {
        console.log("signed out", this.isLoggedIn)
        this.isLoggedIn = false;
        this.$router.push('/');
        
      })
    }
  },  
  mounted() {
    // console.log("mounted")
      onAuthStateChanged(getAuth(),user => {
        if(user){
          this.isLoggedIn = true;
          console.log("when isloggedin is true",this.isLoggedIn)
        }else{
        this.isLoggedIn=false;

        }
      })
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
