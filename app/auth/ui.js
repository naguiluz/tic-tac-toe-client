const store = require('./../store')

const onSignUpSuccess = function (response) { // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-out').hide()
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(`Welcome back, ${response.user.email}!`)
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-out').show()
}

const onSignOutSuccess = function () {
  $('#message').text('Come back soon!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
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
