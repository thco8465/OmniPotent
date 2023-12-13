<!-- used to observe changes in the timer value. The timer value is incremented 
every second, and subscribers are notified when the timer changes. -->
<template>
  <div class="game-board">
    <div class="timer-container">
      <div class="timer">Time: {{ formattedTime }}</div>
    </div>
    <div class="cards-container">
      <Card v-for="(card, index) in shuffledCards" :key="index" :is-flipped="card.flipped" :is-matched="card.matched" @flip="debouncedFlipCard(index)">
        {{ card.value }}
      </Card>
    </div>
  </div>
</template>
<script>
import Card from './card.vue';
import Observer from './observer.js'; // Import the Observer class
import _debounce from 'lodash-es/debounce';
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
        { value: 'D', flipped: false, matched: false },
        { value: 'D', flipped: false, matched: false },
        { value: 'E', flipped: false, matched: false },
        { value: 'E', flipped: false, matched: false },
        { value: 'F', flipped: false, matched: false },
        { value: 'F', flipped: false, matched: false },
        { value: 'G', flipped: false, matched: false },
        { value: 'G', flipped: false, matched: false },
        { value: 'H', flipped: false, matched: false },
        { value: 'H', flipped: false, matched: false },
      ],
      flippedCards: [],
      timer: 0,
      intervalId: null,
      observer: new Observer(), // Instantiate the Observer
      debouncedFlipCard: _debounce(this.flipCard, 300), // Adjust the debounce delay as needed
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
    grid-template-columns: repeat(4, 1fr); /* Adjust columns as needed */    
    grid-gap: 10px; /* Adjust gap as needed */
  }
  .timer-container {
  grid-column: span 4; /* Span the full width of the grid */
  margin-bottom: 10px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Adjust columns as needed */
  grid-gap: 10px; /* Adjust gap as needed */
}
  </style>
  