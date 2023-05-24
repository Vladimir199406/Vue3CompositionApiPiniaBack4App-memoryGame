<template>
  <div
    class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-xs sm:max-w-sm"
  >
    <h1 class="font-bold text-center text-white text-3xl pb-12">{{ staticText.memory }} Game</h1>
    <StartGame />
  </div>
</template>
<script setup>
import StartGame from './mainMenu/StartGame.vue'
import { useStore } from '@/stores/store'
import { onMounted } from 'vue'
import { staticText } from '@/state/staticTextsState'

//data
const store = useStore()

//hooks
onMounted(() => {
  store.$reset
})
</script>

<style scoped>
  h1 {
    background: black;
    box-shadow: rgb(255, 255, 255) 10px -10px 0px -3px, 
    rgb(31, 193, 27) 10px -10px, 
    rgb(255, 255, 255) 20px -20px 0px -3px, 
    rgb(255, 217, 19) 20px -20px, 
    rgb(255, 255, 255) 30px -30px 0px -3px, 
    rgb(255, 156, 85) 30px -30px, 
    rgb(255, 255, 255) 40px -40px 0px -3px, 
    rgb(255, 85, 85) 40px -40px;
    color: #fff;
    font-size: 42px;
    padding: 0px;
  }
</style>
