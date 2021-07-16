// const store = require('./../store')

const signUp = function (data) { // signUp is using ajax to communicate with the API and access the 'object' we created with our getFormFields
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  signIn
}
