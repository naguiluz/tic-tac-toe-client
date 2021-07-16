const onSignUpSuccess = function (response) { // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignInSuccess = function (response) {
  // this gives our user a success message
  $('#message').text(`Welcome back, ${response.user.email}!`)
  $('#sign-in').hide()
  $('#sign-out').show()
}

const onFailure = function () { // this give our user a fail message
  $('#message').text('Whoops! There was an error!')
  $('#sign-up').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onFailure
}
