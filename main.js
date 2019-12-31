new Vue({
  name: 'game',
  el: '#app',
  template: `<div id="#app">
    <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"/>
    <transition name="hand">
      <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
    </transition>
    <transition name="zoom">
      <overlay v-if="activeOverlay">
        <component :key="activeOverlay" :is="'overlay-content-' + activeOverlay" :player="currentPlayer" :opponent="currentOpponent" :players="players"/>
      </overlay>
    </transition>
    <transition name="fade">
      <div class="overlay-background" v-if="activeOverlay"></div>
    </transition>
    <div class="world">
      <castle v-for="(player, index) in players" :player="player" :index="index"/>
      <div class="land"></div>
    </div>
  </div>`,
  data: state,
  mounted() {
    console.log(this.$data === state);
  },
  computed: {
    testCard() {
      return cards.archers
    }
  },
  methods: {
    handlePlay() {
      console.log('You played a card');
    },
    createTestHand() {
      const cards = []
      const ids = Object.keys(cards)
      for (let i = 0; i < 5; i++) {
        cards.push(this.testDrawCard())
      }
      return cards
    },
    testDrawCard() {
      const ids = Object.keys(cards)
      const randomId = ids[Math.floor(Math.random() * ids.length)]
      return {
        uid: cardUid++,
        id: randomId,
        def: cards[randomId]
      }
    },
    testPlayCard(card) {
      const index = this.testHand.indexOf(card)
      this.testHand.splice(index, 1)
    }
  },
  created() {
    this.testHand = this.createTestHand()
  }
})
window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio()
})
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time)
}