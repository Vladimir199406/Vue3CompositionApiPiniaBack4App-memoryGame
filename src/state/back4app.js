import { ref } from 'vue'
import Parse from 'parse/dist/parse.min.js';
import { useStorage } from '@vueuse/core'

//data
export const accessToken = useStorage('my-flag', '')

//methods
export function connectBack4App() {
  Parse.initialize(import.meta.env.VITE_PARSE_APP_ID, import.meta.env.VITE_PARSE_JS_KEY)
  Parse.serverURL = import.meta.env.VITE_PARSE_HOST_API
}

export function signUpBack4App(username, password, email) {
  
  const user = new Parse.User()
  user.set('username', username)
  user.set('password', password)
  user.set('email', email)

  user.signUp()
    .then(function (user) {
      console.log(
        'SUCCESS, user was created: ' +
          user.get('username') +
          ' and email: ' +
          user.get('email')
      )
    })
    .catch(function (error) {
      console.log('ERROR: ' + error.code + ' ' + error.message)
    })
}

export function loginBack4App(username, password) {
  console.log(username, password)
  const user = Parse.User.logIn(username, password)
    .then((user) => {
      accessToken.value = user.attributes.sessionToken
      console.log('User logged in successfuly with name: ' + user.get('username'))
    })
    .catch(function (error) {
      console.log('Error: ' + error.code + ' ' + error.message)
    })
}
