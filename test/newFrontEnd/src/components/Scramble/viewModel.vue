<!--    
Separation of Concerns: MVVM helps in separating the presentation logic (ViewModel) from the UI (View) and the underlying data (Model).
Reusability: You can potentially reuse the ViewModel logic in different Views if needed.
Testability: The ViewModel can be easily tested independently of the UI, improving the overall testability of your application.-->
<template>
    <div>
      <h1>Word Unscramble Game</h1>
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
  
  <style scoped>
  .game-over {
    margin-top: 20px;
    text-align: center;
  }
  
  button {
    padding: 10px;
    background-color: #2ecc71;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #27ae60;
  }
  </style>
  