<template>
  <div class="main-menu">
    <h1 class="game-title">Arcade</h1>
    <div class="game-list">
      <div v-for="(game, index) in minigames" :key="index" @click="selectGame(game)" class="game-card">
        <div class="game-name">{{ game.name }}</div>
        <div class="play-button">Play Now</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import './Arcade Classic.ttf';
export default {
  data() {
    return {
      minigames: [
        { name: "Tiles of Terror", route: 'tileGame' },
        { name: "Terminology Twisters", route: 'scramble' },
        { name: 'Funky Forms Click-a-Palooza', route: 'shapeClicker' },
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
@font-face {
  font-family: 'Arcade Classic';
  src: url('./Arcade Classic.ttf') format('truetype');
}

body {
  margin: 0;
  padding: 0;
}

.main-menu {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #DFFF00;
  padding: 20px;
  border-radius: 10px;
  margin-top: -20px; /* Move the entire layout up */
}

.game-title {
  font-size: 3em;
  color:#8e44ad;
  margin-bottom: 30px; /* Increase margin for better spacing */
  font-family: 'Arcade Classic', sans-serif;
}

.game-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.game-card {
  width: 200px;
  padding: 20px;
  margin: 10px;
  border: 2px solid #8e44ad;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.game-name {
  font-size: 1.5em;
  margin-bottom: 10px;
  color:#8e44ad;
  font-family: 'Arcade Classic', sans-serif;

}

.play-button {
  background-color: #DFFF00;
  color: #8e44ad;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  font-family: 'Arcade Classic', sans-serif;

}

.play-button:hover {
  background-color: rgb(160, 231, 160);
}
</style>
