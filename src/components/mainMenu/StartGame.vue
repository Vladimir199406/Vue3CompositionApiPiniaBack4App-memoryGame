<template>
  <div class="bg-white p-6 w-full flex flex-col gap-4 sm:p-14 rounded-top">
    <div class="pb-4 flex flex-col gap-5 sm:gap-7">
      <div>
        <h2 class="text-title font-bold pb-2 sm:text-xl sm:pb-4">{{ staticText.selectTheme }}</h2>
        <Selection
          class="gap-2.5 sm:gap-8 sm:text-2xl"
          :options="config.theme.options"
          :state="gameConfig.theme"
          @update:state="updateTheme"
        />
      </div>
      <!--ADD THEME ICONS TOGGLE-->
      <div>
        <h2 class="text-title font-bold pb-2 sm:text-xl sm:pb-4">{{ staticText.numbersOfPlayers }}</h2>
        <Selection
          class="gap-2.5 sm:gap-5 sm:text-2xl"
          :options="config.players.options"
          :state="gameConfig.players"
          @update:state="updatePlayers"
        />
      </div>
      <div>
        <h2 class="text-title font-bold pb-2 sm:text-xl sm:pb-4">Grid Size</h2>
        <Selection
          class="gap-2.5 sm:gap-8 sm:text-2xl"
          :options="config.size.options"
          :state="gameConfig.size"
          @update:state="updateSize"
        />
      </div>
    </div>
    <MenuLarge class="p-2.5 sm:text-2xl" @click="startGame">{{ staticText.startGame }}</MenuLarge>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store'
import Selection from './Selection.vue'
import MenuLarge from '../buttons/MenuLarge.vue'
import { staticText } from '@/state/staticTextsState'

//data
const store = useStore()
const config = store.config
const gameConfig = store.gameConfig

//methods
const updateTheme = (index) => {
  gameConfig.theme = index
}
const updatePlayers = (index) => {
  gameConfig.players = index
}
const updateSize = (index) => {
  gameConfig.size = index
}
const startGame = () => {
  store.startGame()
}
</script>

<style scoped>
  .rounded-top {
    border-radius: 0 0 0.75rem 0.75rem;
  }
</style>