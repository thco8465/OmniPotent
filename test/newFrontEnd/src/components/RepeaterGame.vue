<template>
    <div class="memory-game">
      <div v-if="!showSequence">
        <h2>Memorize the Sequence:</h2>
        <p>{{ sequence }}</p>
        <button @click="startGame">Start</button>
      </div>
      <div v-if="showSequence">
        <h2>Repeat the Sequence:</h2>
        <p>{{ userSequence }}</p>
        <button @click="checkSequence">Submit</button>
      </div>
      <div v-if="showResult">
        <h2>{{ resultMessage }}</h2>
        <button @click="resetGame">Play Again</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sequence: '',
        userSequence: '',
        showSequence: false,
        showResult: false,
        resultMessage: '',
      };
    },
    methods: {
      startGame() {
        this.sequence = this.generateSequence();
        this.showSequence = true;
        setTimeout(() => {
          this.showSequence = false;
          this.userSequence = '';
        }, 5000);
      },
      generateSequence() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let generatedSequence = '';
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          generatedSequence += characters[randomIndex];
        }
        return generatedSequence;
      },
      checkSequence() {
        if (this.userSequence === this.sequence) {
          this.resultMessage = 'Correct! You remembered the sequence.';
        } else {
          this.resultMessage = 'Incorrect! Try again.';
        }
        this.showResult = true;
      },
      resetGame() {
        this.sequence = '';
        this.userSequence = '';
        this.showResult = false;
        this.resultMessage = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .memory-game {
    text-align: center;
    margin-top: 50px;
  }
  
  h2 {
    color: #007bff;
  }
  
  p {
    font-size: 24px;
    margin: 20px 0;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  