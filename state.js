// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // World
  worldRatio: getWorldRatio(),
  // TODO Other things
  turn: 1, // 回合
  players: [
    {
      name: '富土康的张全蛋',
      food: 10,
      health: 10,
      // 是否跳过下个回合
      skipTurn: false,
      // 跳过了上个回合
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false
    },
    {
      name: '富土康的李铁柱',
      food: 10,
      health: 10,
      // 是否跳过下个回合
      skipTurn: false,
      // 跳过了上个回合
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false
    }
  ],
  currentPlayerIndex: Math.round(Math.random()),
  testHand: [],
  // 用户界面
  activeOverlay: null,
  get currentPlayer() {
    return state.players[state.currentPlayerIndex]
  },
  get currentOpponentId() {
    return state.currentPlayerIndex === 0 ? 1 : 0
  },
  get currentOpponent() {
    return state.palyers[state.currentOpponentId]
  }
}
