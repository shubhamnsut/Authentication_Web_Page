
<template>
 
  <section class="form__section">
      <form class="form">
        <div class="form__container">
      <p class="heading__greeting">Welcome!</p>
      <h3 class="heading__title">Sign up</h3>
      <p v-if="errorMsg" class="error__message">{{ errorMsg }}</p>

        <div>
          <div>
            <label for="name" class="label__text">Name</label>
          </div>
           <div>
            <input type="text" id="name" v-model="name" placeholder="Name" class="input__box" required>
          </div>
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
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
  name: 'Signup',
  data() {
      return {
          name: "",
          email: "",
          password: "",
          errorMsg: "",
      }
  },
  methods: {
      async registerUser() {  
          const name = this.name;

          try {
            // facing problem name is not desplaying 
              const { user } = await createUserWithEmailAndPassword(getAuth(), this.email, this.password);
              
              // Update user's display name immediately after signing up
              await updateProfile(user, {
                  displayName: name,
              });

              this.$router.push('/dashboard');
          } catch (error) {
        switch (error.code) {
            case 'auth/invalid-email':
                this.errorMsg = "Invalid email address.";
                break;
            case 'auth/weak-password':
                this.errorMsg = "Password is too weak. Please choose a stronger password.";
                break;
            case 'auth/email-already-in-use':
                this.errorMsg = "Email Already Registered with us.";
                break;
            case 'auth/operation-not-allowed':
                this.errorMsg = "Email/password registration is not allowed in this project.";
                break;
            default:
                this.errorMsg = "Registration failed. Please try again later.";
        }
    }
      },

      //auth/email-already-in-use
      checkCon() {
          console.log("This is a test");
      }  
  },
}
</script>


 
<style>
.error__message{
  margin-top: -30px;
  font-weight: bold;
  color:red;
  padding-bottom: 10px;
}

</style> 