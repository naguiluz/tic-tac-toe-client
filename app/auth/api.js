const store = require('./../store')
const config = require('./../config')

const signUp = function (data) { // signUp is using ajax to communicate with the API and access the 'object' we created with our getFormFields
  return $.ajax({
    url: config + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: config + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const playerOne = function (response) {
  console.log(response)
  return $.ajax({
    url: config + '/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'X'
        },
        over: false
      }
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  playerOne
}
