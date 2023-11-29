<template>
  <div class="create-account">
    <h2>Create Account</h2>
    <form @submit.prevent="createAccount">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="newAccount.username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="newAccount.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="newAccount.password" required>
      </div>
      <button type="submit">Create Account</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newAccount: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async createAccount() {
      try {
        const response = await axios.post('/api/createAccount', this.newAccount);
        if (response.data.success) {
          // Account created successfully
          console.log('Account created');
        } else {
          // Account creation failed
          console.error('Account creation failed');
        }
      } catch (error) {
        console.error('Error creating account:', error);
      }

      // Reset the form
      this.newAccount = {
        username: '',
        email: '',
        password: '',
      };
    },
  },
};
</script>

<style scoped>
.create-account {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
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
</style>
