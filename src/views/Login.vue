<template>
    
    <section class="form__section">
        <form class="form">
          <div class="form__container">
        <p class="heading__greeting" >Welcome!</p>
        <h3 class="heading__title">Login</h3>
        <p v-if="errorMsg" class="error__message">{{ errorMsg }}</p>
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
          
         <div>
             <button class="btn" @click.prevent="signInUser" >Sign In</button>
          </div>
          
            <p class="account-check">Do not hav an account?<router-link to="/signup">
                <span>Sign up</span>
            </router-link></p>
            </div>
      </form>
      </section>

</template> 

<script>
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
            errorMsg: "",
        }
    },
    methods: {
        signInUser() {
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
                .then(data => {
                    const router = this.$router;
                    router.push('/dashboard')
                    console.log(data);
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/invalid-email': this.errorMsg = "Email address is invalid";
                            break;
                        case 'auth/user-disabled': this.errorMsg = "User is currently disabled";
                            break;
                        case "auth/user-not-found": this.errorMsg = "User does not exist";
                            break;
                        case "auth/wrong-password": this.errorMsg = "Password is incorrect";
                            break;
                        default: this.errorMsg = "Email or Password is incorrect"
                    }
                })
        }
    }


}
</script>


 
<style>
body {
  background-image: url("/src/views/4907157.jpg");
  background-size: cover;
  background-position: center;
}
.form__section {
  margin-top: -60px;
  padding-top: 70px;
  width:100vw;
  height: calc(100vh);
  display:flex;
  justify-content: center;
  align-items: center;
  
 

}
.form {
  border: 1px solid #ababab;
  width: var(--container-outer-S-324);
  padding: 36px 22px;
  border-radius: var(--b-radius-input-button);
  margin-top: 20px;
  margin-bottom: 10px;

}

.form__container {
  width: var( --container-inner-S-279);
  margin:auto;
}

.form__container div {
  text-align: left;
}

.heading__greeting,
.heading__title {
    text-align: center;
}


.heading__greeting{
  font-weight: 100;
  margin-bottom: 26px;
  font-size: var( --fs-greeting);
}

.heading__title{
  font-size: var( --fs-heading);
  margin-bottom: 60px;
}

.label__text{
  font-size: 1rem;
}

.input__box {
  
  height: var(--input-btn-height);
  width: 100%;
  font-size: 14px;
  color: var(--secondary-text-color);
  margin-bottom: 38px;
  border: 1px solid #282828;
  padding-left: 10px;
}


.btn {
  height: var(--input-btn-height);
  background-color: var(--base-text-color);
  width: 100%;
  color: #fff;
  
}
.error__message{
  font-weight: bold;
  color:red;
}

.input__box, 
.btn{
  border-radius: var(--b-radius-input-button);
}

.account-check{
  margin-top: 10px;
  font-weight: 100;
}

account-check span {
  font-weight: unset;
}

</style> 