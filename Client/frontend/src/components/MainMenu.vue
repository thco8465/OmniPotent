<!-- components/MainMenu.vue -->
<template>
  <div class="main-menu">
    <h1>Main Menu</h1>
    <div class="menu-options">
      <router-link to="/play" class="menu-option">Play Mini Game</router-link>
      <router-link to="/profile" class="menu-option">Check Profile</router-link>
      <router-link to="/leaderboards" class="menu-option">Check Leaderboards</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // Add component logic here
};
</script>

<style scoped>
.main-menu {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.menu-options {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-option {
  margin: 10px;
  padding: 10px;
  font-size: 1.2em;
  text-decoration: none;
  color: #007bff;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.menu-option:hover {
  background-color: #007bff;
  color: #fff;
}

/* Add more styles as needed */
</style>
