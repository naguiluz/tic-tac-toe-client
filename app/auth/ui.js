const store = require('./../store')
// const player = require('./events')
const onSignUpSuccess = function (response) { // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  $('#sign-up-header').css('display', 'none')
  $('#sign-up').css('display', 'none')
}

const onSignInSuccess = function (response) {
  store.user = response.user // this stores the data created for user in our store file
  $('#message').text(`Welcome back, ${response.user.email}!`)
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-out-header').css('display', 'block')
  $('#sign-out').css('display', 'block')
  $('#new-game-header').css('display', 'block')
  $('#new-game').css('display', 'block')
  $('#sign-in-header').css('display', 'none')
  $('#sign-in').css('display', 'none')
  $('#sign-up-header').css('display', 'none')
  $('#sign-up').css('display', 'none')
}

const onSignOutSuccess = function () {
  $('#message').text('Come back soon!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-out-header').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('#new-game-header').css('display', 'none')
  $('#new-game').css('display', 'none')
  $('#sign-in-header').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#sign-up-header').css('display', 'block')
  $('#sign-up').css('display', 'block')
  $('#game-board').css('display', 'none')
}

const onNewGameSuccess = function (response) {
  store.game = response.game // this stores game object to be accessed later
  store.gameId = response.game._id // this stores data for gameid in store
  $('#message').text('It\'s x\'s turn!')
  $('#game-board').css('display', 'block')
}

const onPlayerOneSuccess = function (response) {
  store.game = response.game
  // if (response.game.over) { // if over is true then display this message
  //   $('#message').text(`Game Over! ${store.game.cells[0]}`)
  // }
}
const onFailure = function () { // this gives our user a fail message
  $('#message').text('Whoops! There was an error!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onPlayerOneSuccess,
  onFailure
}
