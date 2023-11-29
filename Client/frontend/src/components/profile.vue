<!-- components/Profile.vue -->
<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="games-list">
      <div v-for="game in gamesData" :key="game.id" class="game-item">
        <h2>{{ game.gameName }}</h2>
        <p>Time Spent: {{ game.timeSpent }}</p>
        <p>Rank: {{ game.rank }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gamesData: [
        { id: 1, gameName: 'Mini Game 1', timeSpent: '1:30', rank: 1 },
        { id: 2, gameName: 'Mini Game 2', timeSpent: '2:00', rank: 2 },
        { id: 3, gameName: 'Mini Game 3', timeSpent: '1:45', rank: 3 },
        // Add more dummy data as needed
      ],
    };
  },
};
</script>

<style scoped>
.profile {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.games-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.game-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  text-align: left;
  width: 200px;
}

/* Add more styles as needed */
</style>
