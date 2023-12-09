<template>
    <div>
      <h1>Shape Click Game</h1>
      <div class="game-container">
        <div
          v-for="(shape, index) in shapes"
          :key="index"
          :class="['shape', { clicked: shape.clicked }]"
          @click="handleShapeClick(index)"
          :style="{ top: `${shape.top}px`, left: `${shape.left}px` }"
        ></div>
      </div>
      <div v-if="gameOver" class="game-over">
        <p>Game Over!</p>
        <p>Your Score: {{ score }}</p>
        <button @click="startGame">Start Again</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shapes: [],
        score: 0,
        timeRemaining: 10,
        gameOver: false,
        timer: null,
      };
    },
    methods: {
      startGame() {
        this.shapes = [];
        this.score = 0;
        this.gameOver = false;
        this.spawnShapes();
        this.startTimer();
      },
      spawnShapes() {
        const container = document.querySelector('.game-container');
        const containerRect = container.getBoundingClientRect();
  
        for (let i = 0; i < 5; i++) {
          const shape = {
            top: Math.random() * (containerRect.height - 50),
            left: Math.random() * (containerRect.width - 50),
            clicked: false,
          };
          this.shapes.push(shape);
        }
      },
      handleShapeClick(index) {
        if (!this.gameOver && !this.shapes[index].clicked) {
          this.shapes[index].clicked = true;
          this.score += 1;
        }
      },
      startTimer() {
        this.timeRemaining = 10;
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
  .game-container {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .shape {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #3498db;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  
  .shape.clicked {
    transform: scale(0);
  }
  
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
  