<template>
    <!-- <form>
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit" @click.prevent="registerUser">Register</button>
    </form> -->


    <section class="form__section">
        <form class="form">
          <div class="form__container">
        <p class="heading__greeting">Welcome!</p>
        <h3 class="heading__title">Sign up</h3>
        <p v-if="errorMsg">{{ errorMsg }}</p>
          <div>
             <div>
          <label class="label__text">Email</label>
        </div>
        <div>
          <input v-model="email" type="email" placeholder="Email" class="input__box"/>
        </div>
          </div>
          
          
          <div>
             <div>
          <label class="label__text">Password</label>
        </div>
         <div>
          <input v-model="password" type="password" placeholder="Password" class="input__box"/>
        </div>
          </div>
          
         <div> <button class="btn" type="submit" @click.prevent="registerUser">Sign up</button>
          </div>
            <p class="account-check">Already have an account?<router-link to="/login">
                <span>Sign in</span>
            </router-link></p>
            </div>
      </form>
      </section>


    
</template>

<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from 'vue-router';
export default {
    name: 'Signup',
    data() {
        return {
            email: "",
            password: "",

        }
    },
    methods: {
        registerUser(){  
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then(data => {
                
                    const router = this.$router
                    console.log(router);
                    router.push('/');
                    console.log("DATA:",data)
                }).catch(error => {
                    console.log(error.code, " Error msg---->" + error.message)
            })
        },
        checkCon(){
            console.log("This is a test");
        }  
    },
}
</script>

