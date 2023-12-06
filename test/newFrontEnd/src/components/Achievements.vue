<template>
    <div class="achievements-page">
      <header>
        <h1>{{ username }}'s Achievements</h1>
      </header>
      <section>
        <h2>Time-Based Achievements</h2>
        <ul>
          <li v-for="achievement in timeBasedAchievements" :key="achievement.threshold">
            <span v-if="totalTimePlayed >= achievement.threshold" class="achieved">{{ achievement.name }}</span>
            <span v-else>{{ achievement.name }}</span>
          </li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Mock user data (replace this with actual data)
        username: 'JohnDoe',
        totalTimePlayed: 25, // Replace with actual time played
        timeBasedAchievements: [
          { threshold: 10, name: 'Bronze Player' },
          { threshold: 20, name: 'Silver Player' },
          { threshold: 30, name: 'Gold Player' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .achievements-page {
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
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    font-size: 16px;
    margin: 10px 0;
  }
  
  .achieved {
    color: #4caf50; /* Green color for achieved achievements */
    font-weight: bold;
  }
  </style>
  