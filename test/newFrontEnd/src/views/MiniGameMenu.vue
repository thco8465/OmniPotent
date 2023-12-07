<template>
  <div class="main-menu">
    <h1>Welcome to Our Mini Games!</h1>
    <ul>
      <li v-for="(game, index) in minigames" :key="index" @click="selectGame(game)">
        {{ game.name }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minigames: [
        { name: 'Tile Memorization Game', route: 'tileGame' },
        { name: 'Word Unscramble Game', route: 'scramble' },
        { name: 'Shape Clicker Game', route: 'shapeClicker' },
      ],
    };
  },
  methods: {
    selectGame(game) {
      this.$router.push({ name: game.route });
    },
  },
};
</script>
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

