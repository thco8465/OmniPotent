<template>
  <div>
    <h1 class="game-title">Terminology Twisters</h1>
    <div v-if="!gameOver">
      <p>Unscramble the word: {{ currentWord.scrambled }}</p>
      <input v-model="userInput" placeholder="Enter unscrambled word" @keyup.enter="checkAnswer" />
      <button @click="nextWord">Next Word</button>
      <p>Time remaining: {{ timeRemaining }}s</p>
    </div>
    <div v-else class="game-over">
      <p>Game Over!</p>
      <p>Your Score: {{ score }}</p>
      <button @click="startGame">Start Again</button>
    </div>
  </div>
</template>

<script>
import words from './model';

export default {
  data() {
    return {
      currentWord: {},
      userInput: '',
      score: 0,
      timeRemaining: 60,
      gameOver: false,
      timer: null,
    };
  },
  methods: {
    startGame() {
      this.score = 0;
      this.gameOver = false;
      this.nextWord();
      this.startTimer();
    },
    nextWord() {
      const randomIndex = Math.floor(Math.random() * words.length);
      this.currentWord = words[randomIndex];
      this.userInput = '';
    },
    checkAnswer() {
      if (this.userInput.toLowerCase() === this.currentWord.original) {
        this.score += 1;
        this.nextWord();
      }
    },
    startTimer() {
      this.timeRemaining = 60;
      this.timer = setInterval(() => {
        this.timeRemaining -= 1;
        if (this.timeRemaining <= 0) {
          clearInterval(this.timer);
          this.gameOver = true;
        }
      }, 1000);
    },
  },
  mounted() {
    this.startGame();
  },
};
</script>

<style>
/* Global styles, not scoped */
@font-face {
  font-family: 'Arcade Classic';
  src: url('./Arcade Classic.ttf') format('truetype');
}
</style>
<style scoped>
.game-title{
  color: #8e44ad;
  font-family: 'Arcade Classic', sans-serif;
  background-color: #DFFF00;
  border-radius: 15px;
}
.game-over {
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 10px;
  background-color: #DFFF00;
  color: #8e44ad;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 5px;
  font-family: 'Arcade Classic', sans-serif;
  border-radius: 15px;
}

button:hover {
  background-color: rgb(160, 231, 160);
}
</style>
