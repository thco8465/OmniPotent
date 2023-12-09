<template>
  <div class="profile-page">
    <header>
      <h1>{{ user ? user.username + "'s" : 'User'}} Profile</h1>
    </header>
    <section v-if="user">
      <h2>Profile Information</h2>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <!-- Add other user properties as needed -->
    </section>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const user = ref(null);

    onMounted(() => {
      // Fetch user data from the store when the component is mounted
      user.value = store.state.user;
    });

    // Watch for changes to the user data in the store
    watchEffect(() => {
      user.value = store.state.user;
    });

    return { user };
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
