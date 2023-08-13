<template>
    <div class="dashboard">
      <h2>Welcome Home, {{ userName }}</h2>
      <!-- Your dashboard content goes here -->
    </div>
  </template>
  
  <script>
  import { getAuth } from '@firebase/auth';
  
  export default {
    name: 'Dashboard',
    data() {
      return {
        userName: "",
      };
    },
    created() {
      this.getUserName();
    },
    methods: {
      getUserName() {
        const user = getAuth().currentUser;
        if (user) {
          this.userName = user.displayName || "User";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    margin-top: 20px;
    text-align: center;
  }
  </style>
  