const store = require('./../store')

const onSignUpSuccess = function (response) { // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-out').hide()
}

const onSignInSuccess = function (response) {
  // this gives our user a success message
  store.user = response.user
  $('#message').text(`Welcome back, ${response.user.email}!`)
  $('#sign-in').hide()
  $('#sign-out').show()
}

const onSignOutSuccess = function () {
  $('#message').text('Come back soon!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
}

const onFailure = function () { // this give our user a fail message
  $('#message').text('Whoops! There was an error!')
  $('#sign-up').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onFailure
}
