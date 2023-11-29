<!-- components/Leaderboards.vue -->
<template>
  <div class="leaderboards">
    <h1>Leaderboards</h1>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in leaderboardData" :key="player.id">
          <td>{{ player.rank }}</td>
          <td>{{ player.username }}</td>
          <td>{{ player.time }}</td>
          <td>{{ player.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaderboardData: [
        { id: 1, rank: 1, username: 'Player1', time: '1:30', date: '2023-01-01' },
        { id: 2, rank: 2, username: 'Player2', time: '1:45', date: '2023-01-02' },
        { id: 3, rank: 3, username: 'Player3', time: '2:00', date: '2023-01-03' },
        // Add more dummy data as needed
      ],
    };
  },
};
</script>

<style scoped>
.leaderboards {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

/* Add more styles as needed */
</style>
