<template>
  <div class="main-menu">
    <h1>Welcome to Our Mini Games!</h1>
    <ul>
      <li v-for="(game, index) in minigames" :key="index" @click="selectGame(game)">
        {{ game.name }}
      </li>
    </ul>
  </div>
</template>

<style>
.main-menu {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

li {
  font-size: 1.5em;
  margin: 10px;
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #007bff;
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      minigames: [
        { name: 'Game 1', route: '/game1' },
        { name: 'Game 2', route: '/game2' },
        { name: 'Game 3', route: '/game3' },
        // Add more games as needed
      ],
    };
  },
  methods: {
    selectGame(game) {
      // You can navigate to the selected game's route or perform other actions
      console.log(`Selected ${game.name}`);
      // For example, you might want to use Vue Router to navigate to the game's route:
      // this.$router.push(game.route);
    },
  },
};
</script>
