import { ref } from 'vue'
import Parse from 'parse/dist/parse.min.js'
import { useStorage } from '@vueuse/core'

//data
export const accessToken = useStorage('my-flag', '')

export const authModalShow = ref(false)
export const tab = ref('login')

//methods
export const signUpBack4App = async (values) => {
  const user = new Parse.User()
  user.set('username', values.username)
  user.set('password', values.password)
  user.set('email', values.email)

  let responseValue = null

  await user
    .signUp()
    .then((user) => {
      console.log(
        'SUCCESS, user was created: ' + user.get('username') + ' and email: ' + user.get('email')
      )
      responseValue = user
    })
    .catch((error) => {
      console.log('ERROR: ' + error.code + ' ' + error.message)
      responseValue = error
    })

  return responseValue
}

export const loginBack4App = async (values) => {
  let responseValue = null

  await Parse.User.logIn(values.username, values.password)
    .then((user) => {
      accessToken.value = user.attributes.sessionToken
      responseValue = user
    })
    .catch((error) => {
      console.log('Error: ' + error.code + ' ' + error.message)
      responseValue = error
    })

  return responseValue
}

export function toggleAuthModal(flag) {
  if (flag === true) {
    flag = false
  } else {
    flag = true
  }
}
