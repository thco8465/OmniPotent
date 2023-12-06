<template>
    <div class="profile-page">
      <header>
        <h1>{{ user.username }}'s Profile</h1>
      </header>
      <section>
        <h2>Profile Information</h2>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <!-- Add other user properties as needed -->
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: null,
      };
    },
    created() {
      // Assuming you have the username from somewhere (e.g., from the authentication process)
      const username = 'JohnDoe'; // Replace with the actual username
  
      // Fetch user data from the server
      this.fetchUserData(username);
    },
    methods: {
      async fetchUserData(username) {
        try {
          const response = await axios.get(`/userData/${username}`);
  
          if (response.data.success) {
            this.user = response.data.user;
          } else {
            console.error('User data fetch failed:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },
    },
  };
  </script>
  <style scoped>
  .profile-page {
    max-width: 600px;
    margin: 0 auto;
  }
  
  header {
    background-color: #007bff;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    margin: 0;
  }
  
  section {
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-top: 20px;
  }
  
  h2 {
    color: #007bff;
  }
  
  p {
    font-size: 16px;
    margin: 10px 0;
  }
  </style>
  