import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import Login from '@/views/Login.vue'; 
import Signup from '@/views/Signup.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import Dashboard from '@/views/Dashboard.vue';
import Home from '@/views/Home.vue'

import { getAuth } from 'firebase/auth';


const requireGuest = (to, from, next) => {
  if (getAuth().currentUser) {
    next('/dashboard')
  } else {
    next();
  }
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'

const router = createRouter({
    history:createWebHistory(),
    routes: [
       {
        path:"/",
        name:"Home",
        component: Home,
       },
       {
        path: '/home',
        redirect: '/'
      },
       {
        path:"/login",
        name:"Login",
        component: Login,
        beforeEnter: requireGuest,
       },
       {
        path:"/signup",
        name:"Signup",
        component: Signup,
       },
       {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          requiresAuth: true
        }
    },
       
       {
       path:"/:pathMactch(.*)*",
       name:"NotFound",
       component: PageNotFound
       }
    
    ],
})


router.beforeEach((to, from, next) => {
  const currentUser = getAuth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (to.name === 'Dashboard' && !currentUser) {
    next('/');
  } else {
    next();
  }
});








// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZ3On7-OMqEHy-qUvK38Njuc88yN0fWQ",
  authDomain: "vue-fuelbuddy-project.firebaseapp.com",
  projectId: "vue-fuelbuddy-project",
  storageBucket: "vue-fuelbuddy-project.appspot.com",
  messagingSenderId: "782697484978",
  appId: "1:782697484978:web:c8dbd5e07dc1c86600afab"
}; 

// Initialize Firebase
initializeApp(firebaseConfig);


createApp(App)
.use(router)
.mount('#app')


