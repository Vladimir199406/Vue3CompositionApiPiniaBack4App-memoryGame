<template>
  <header class="flex justify-between items-center">
    <h1 class="text-2xl font-bold sm:text-4xl">memory</h1>
    <div class="sm:hidden">
      <BtnPrimary class="px-8" @click="clickMobile">Menu</BtnPrimary>
      <MobileMenu v-if="store.mobileMenu && store.gameStarted" />
    </div>
    <div class="hidden sm:flex sm:text-xl sm:gap-4">
      <BtnPrimary class="px-6" @click="restart">
        {{ staticText.restartGame }} <i :class="[icons.restartGame]"></i>
      </BtnPrimary>
      <BtnSecondary class="px-6" @click="newGame">
        {{ staticText.newGameSetup }} <i :class="[icons.newGameSetup]"></i>
      </BtnSecondary>
    </div>
  </header>
</template>

<script setup>
import BtnPrimary from '@/components/buttons/Primary.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import { useStore } from '@/stores/store'
import BtnSecondary from './buttons/Secondary.vue'
import { icons } from '@/state/bindedWithIconsState'
import { staticText } from '@/state/staticTextsState'

//data
const store = useStore()

//methods
const clickMobile = () => {
  store.mobileMenu = true
}
const restart = () => {
  store.restartGame()
}
const newGame = () => {
  store.newGame()
}
</script>
