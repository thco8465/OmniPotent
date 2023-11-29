<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import CreateAccount from './components/CreateAccount.vue';
import MyLogin from './components/MyLogin.vue';
</script>

<template>
  <header>
    <img alt="myLogo" class="logo" src="@/assets/myLogo.jpg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hone your mental faculties" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/miniGames">MiniGames</RouterLink>
        <RouterLink to="/createAccount">Create Account</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 8px;  /* Apply rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Add a subtle shadow */
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
