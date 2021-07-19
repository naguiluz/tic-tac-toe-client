const store = require('./../store')

const onSignUpSuccess = function (response) { // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  $('#sign-up-header').css('display', 'none')
  $('#sign-up').css('display', 'none')
}

const onSignInSuccess = function (response) {
  store.user = response.user
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

const onNewGameSuccess = function () {
  $('#message').text("Let's Play!")
  $('#game-board').css('display', 'block')
}

const onFailure = function () { // this give our user a fail message
  $('#message').text('Whoops! There was an error!')
  $('#sign-up').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onFailure
}
