const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
let turn = true // this will allow us to access what turn it is. if turn is true then x if false then o
let player = turn ? 'x' : 'o' // this turnery says "is turn true? if yes then x if false then o"
let endGame = false

const onSignUp = function (event) {
  event.preventDefault() // prevent refresh
  const form = event.target // form variable(data being sent tp api) is the event of submitting our info
  const data = getFormFields(form) // data variable is the getFormFields translation of that data into a readable 'object' which is a json string
  api.signUp(data) // accesses the api file to run the signUp ajax function to communicate with api
    .then(ui.onSignUpSuccess) // then runs this function on successful execution with api
    .catch(ui.onFailure) // catch runs this function on failure
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

const onSignOut = function () { // our sign out event does not take in any data so it does not need to use getFormFields, instead it will only access the api through ajax and our signOut function
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const onNewGame = function () {
  player = 'x' // reset turn to x
  turn = true // reset turn to true
  endGame = false
  $('td').text('') // resets the boxes for a new game
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onFailure)
}

const onWin = function () {
  const board = store.game.cells
  console.log(store.game)
  const win1 =
    board[0] !== '' &&
    board[1] !== '' &&
    board[2] !== '' &&
    board[0] === board[1] &&
    board[1] === board[2]
  const win2 =
    board[3] !== '' &&
    board[4] !== '' &&
    board[5] !== '' &&
    board[3] === board[4] &&
    board[4] === board[5]
  const win3 =
    board[6] !== '' &&
    board[7] !== '' &&
    board[8] !== '' &&
    board[6] === board[7] &&
    board[7] === board[8]
  const win4 =
    board[0] !== '' &&
    board[3] !== '' &&
    board[6] !== '' &&
    board[0] === board[3] &&
    board[3] === board[6]
  const win5 =
    board[1] !== '' &&
    board[4] !== '' &&
    board[7] !== '' &&
    board[1] === board[4] &&
    board[4] === board[7]
  const win6 =
    board[2] !== '' &&
    board[5] !== '' &&
    board[8] !== '' &&
    board[2] === board[5] &&
    board[5] === board[8]
  const win7 =
    board[0] !== '' &&
    board[4] !== '' &&
    board[8] !== '' &&
    board[0] === board[4] &&
    board[4] === board[8]
  const win8 =
    board[2] !== '' &&
    board[4] !== '' &&
    board[6] !== '' &&
    board[2] === board[4] &&
    board[4] === board[6]
  const tie =
    board[0] !== '' &&
    board[1] !== '' &&
    board[2] !== '' &&
    board[3] !== '' &&
    board[4] !== '' &&
    board[5] !== '' &&
    board[6] !== '' &&
    board[7] !== '' &&
    board[8] !== ''

  if (board === win1) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === win2) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === win3) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === win4) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === win5) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === win6) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === win7) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === win8) {
    endGame = true
    $('#message').text(`${player} wins!`)
  } else if (board === tie) {
    endGame = true
    $('#message').text('It\'s a tie!')
  } else {
    endGame = false
  }
}

const onPlayerOne = function (event) {
  const target = event.target
  const cellIndex = target.dataset.cellIndex // this creates a variable out of the clicked(target) cell index
  if ($(target).is(':empty')) { // setting an if statement to only run this process if a cell is empty
    $(target).text(player)

    const game = { // this creates a variable that is a game "object" that we can pass in
      cell: {
        index: cellIndex, // sets index to clicked td
        value: player // this sets the value to what player turn it is
      },
      over: endGame // NEED TO UPDATE THIS LATER
    }
    onWin()
    api.playerOne(game)
      .then(ui.onPlayerOneSuccess)
      .catch(ui.onFailure)
    turn = !turn // this changes turn from true to false each return
    player = turn ? 'x' : 'o' // redefining player turn so that our message is properly displaying whose turn it is
    $('#message').text(`It's ${player}'s turn!`)
    // return turn
  } else { // message for when a cell is full
    $('#message').text('This space is taken! Why don\'t you select an empty one?')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onPlayerOne

}
