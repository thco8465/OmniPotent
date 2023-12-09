<template>
  <div class="game-board">
    <div class="timer">Time: {{ formattedTime }}</div>
    <Card v-for="(card, index) in shuffledCards" :key="index" :is-flipped="card.flipped" :is-matched="card.matched" @flip="flipCard(index)">
      {{ card.value }}
    </Card>
  </div>
</template>

<script>
import Card from './card.vue';
import Observer from './observer.js'; // Import the Observer class
export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        { value: 'A', flipped: false, matched: false },
        { value: 'B', flipped: false, matched: false },
        { value: 'A', flipped: false, matched: false },
        { value: 'B', flipped: false, matched: false },
        { value: 'C', flipped: false, matched: false },
        { value: 'C', flipped: false, matched: false },
      ],
      flippedCards: [],
      timer: 0,
      intervalId: null,
      observer: new Observer(), // Instantiate the Observer
    };
  },
  computed: {
    shuffledCards() {
      return this.cards.sort(() => Math.random() - 0.5);
    },
    formattedTime() {
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
  },
  methods: {
    flipCard(index) {
      if (!this.cards[index].flipped) {
        this.cards[index].flipped = true;
        this.flippedCards.push(index);

        if (this.flippedCards.length === 2) {
          setTimeout(() => {
            this.checkMatch();
            this.flippedCards = [];
          }, 1000);
        }
      }
    },
    checkMatch() {
      const [index1, index2] = this.flippedCards;
      if (this.cards[index1].value === this.cards[index2].value) {
        this.cards[index1].matched = true;
        this.cards[index2].matched = true;
      } else {
        this.cards[index1].flipped = false;
        this.cards[index2].flipped = false;
        this.incrementTimer(2);
      }

      if (this.allCardsMatched()) {
        clearInterval(this.intervalId);
        alert(`Congratulations! You've matched all cards in ${this.formattedTime} seconds!`);
      }
    },
    incrementTimer(seconds) {
      this.timer += seconds;
    },
    allCardsMatched() {
      return this.cards.every((card) => card.matched);
    },
    incrementTimer(seconds) {
      this.timer += seconds;
      this.observer.notify(this.timer); // Notify observers when the timer changes
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.incrementTimer(1);
    }, 1000);
    // Subscribe to the observer to perform actions when the timer changes
    this.observer.subscribe((newTime) => {
      // Perform actions when the timer changes (e.g., update UI, trigger events)
      console.log(`Timer changed: ${newTime} seconds`);
    });
  },
};
</script>
  <style scoped>
  /* Add your styles for the game board */
  .game-board {
    display: grid;
    grid-template-columns: repeat(4, 100px); /* Adjust columns as needed */
    grid-gap: 10px; /* Adjust gap as needed */
  }
.timer {
  margin-bottom: 10px;
}
  </style>
  