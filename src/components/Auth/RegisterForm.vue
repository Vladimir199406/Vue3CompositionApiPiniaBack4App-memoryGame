<template>
  <div>
    <!-- Registration Form -->
    <div
      class="text-white text-center font-bold p-5 mb-4"
      v-if="reg_show_alert"
      :class="reg_alert_variant"
    >
      {{ reg_alert_msg }}
    </div>
    <vee-form :validation-schema="schema" @submit="register">
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
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          type="email"
          name="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <input
            type="password"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Password"
            v-bind="field"
          />
          <div class="text-red-600" v-for="error in errors" :key="error">
            {{ error }}
          </div>
        </vee-field>
      </div>
      <!-- Confirm Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Confirm password</label>
        <vee-field
          type="password"
          name="confirm_password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Confirm Password"
        />
        <ErrorMessage class="text-red-600" name="confirm_password" />
      </div>
      <!-- TOS -->
      <div class="mb-3 pl-6">
        <vee-field
          type="checkbox"
          name="tos"
          value="1"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
        />
        <label class="inline-block">Accept terms of service</label>
        <ErrorMessage class="text-red-600 block" name="tos" />
      </div>
      <button
        type="submit"
        :disabled="reg_in_submission"
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
import { signUpBack4App, tab } from '@/state/auth.js'

//data
const schema = ref({
  username: 'required|min:3|max:20|alphaSpaces',
  email: 'required|min:3|max:100|email',
  password: 'required|min:4|max:32',
  confirm_password: 'passwords_mismatch:@password',
  tos: 'tos'
})

const reg_in_submission = ref(false)
const reg_show_alert = ref(false)
const reg_alert_variant = ref('bg-blue-500')
const reg_alert_msg = ref('Please wait! Your account is being created.')

//methods
const register = async (values) => {
  reg_show_alert.value = true
  reg_in_submission.value = true
  reg_alert_variant.value = 'bg-blue-500'
  reg_alert_msg.value = 'Creating your account...'

  const responseCreate = await signUpBack4App(values)

  console.log(' responseCreate', responseCreate)

  if (responseCreate?.createdAt) {
    reg_alert_variant.value = 'bg-green-500'
    reg_alert_msg.value = 'Success! Your account has been created.'
  } else {
    reg_in_submission.value = false
    reg_alert_variant.value = 'bg-red-500'
    reg_alert_msg.value = responseCreate?.message
  }
}
</script>

<style></style>
