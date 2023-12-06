<template>
    <div class="main-menu">
      <h1>Welcome to My App</h1>
      <nav>
        <router-link to="/Profile">Profile</router-link>
        <router-link to="/Achievements">Achievements</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null, // You can update this with actual user data when logged in
      };
    },
  };
  </script>
  
  <style scoped>
  .main-menu {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  h1 {
    color: #007bff;
  }
  
  nav {
    margin-top: 20px;
  }
  
  router-link {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  .user-info {
    margin-top: 20px;
  }
  
  .user-info p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  router-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  