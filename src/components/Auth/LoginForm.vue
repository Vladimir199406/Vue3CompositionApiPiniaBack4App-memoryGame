<template>
  <div>
    <div
      class="text-white text-center font-bold p-4 mb-4"
      v-if="login_show_alert"
      :class="login_alert_variant"
    >
      {{ login_alert_msg }}
    </div>
    <!-- Login Form -->
    <vee-form :validation-schema="loginSchema" @submit="login">
      <!-- Username -->
      <div class="mb-3">
        <label class="inline-block mb-2">Name</label>
        <vee-field
          type="text"
          name="username"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Name"
        />
        <ErrorMessage class="text-red-600" name="username" />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field
          type="password"
          name="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
        />
        <ErrorMessage class="text-red-600" name="password" />
      </div>
      <button
        type="submit"
        :disabled="login_in_submission"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
        style="width: 200px; margin: auto"
      >
        Submit
      </button>
    </vee-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { loginBack4App } from '@/state/auth.js'

//data
const loginSchema = ref({
  username: 'required|min:3|max:20',
  password: 'required|min:4|max:32'
})

const login_in_submission = ref(false)
const login_show_alert = ref(false)
const login_alert_variant = ref('bg-blue-500')
const login_alert_msg = ref('Please wait! Your account is being created.')

//methods
async function login(values) {
  login_in_submission.value = true
  login_show_alert.value = true
  login_alert_variant.value = 'bg-blue-500'
  login_alert_msg.value = 'Please wait! We are logging you in.'

  const responseLogin = await loginBack4App(values)

  if (responseLogin?.attributes?.sessionToken) {
    login_alert_variant.value = 'bg-green-500'
    login_alert_msg.value = 'Success! You are now logged in.'
  } else {
    login_in_submission.value = false
    login_alert_variant.value = 'bg-red-500'
    login_alert_msg.value = responseLogin?.message
  }
}
</script>

<style></style>
