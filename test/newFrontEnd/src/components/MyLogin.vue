<template>
  <div class="login-form">
    <h2>Login</h2>
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Login</button>
    <div v-if="showErrorMessage" class="error-message">
      Invalid credentials. Please try again.
    </div>
   <router-link to="/CreateAccount" class="create-account-link">
         Don't have an account? Create an Account
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MyLogin',
  data() {
    return {
      username: '',
      password: '',
      showErrorMessage: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/login', {
          username: this.username,
          password: this.password,
        });

        if (response.data.success) {
          // Login was successful, you can handle it here
          console.log('Login successful');
          this.$store.commit('setUser', response.data.user);
          this.$router.push('/profile');
        } else {
          // Login failed, show error message
          this.showErrorMessage = true;
        }
      } catch (error) {
        console.error('Error during login:', error);
        this.showErrorMessage = true;
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.error-message {
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;
}

.create-account-link {
  margin-top: 10px;
  font-size: 16px;
}

.create-account-link a {
  color: #007bff;
  text-decoration: none;
}

.create-account-link a:hover {
  text-decoration: underline;
}
</style>
