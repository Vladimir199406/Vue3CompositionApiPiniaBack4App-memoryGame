<template>
  <div :class="store.gameStarted ? ['bg-body-gradient-defualt'] : ['bg-body-gradient-setup']">
    <div
      class="min-h-screen flex flex-col gap-20 mx-auto w-11/12 max-w-xs py-6 sm:max-w-md lg:max-w-lg sm:py-11 lg:py-16"
    >
      <HeaderVue v-if="store.gameStarted" />
      <main>
        <BubbleAnimation/>
        <div>
          <MainMenu v-if="!store.gameStarted" />
          <MemoryGame v-else />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import HeaderVue from '@/components/Header.vue'
import MainMenu from './components/MainMenu.vue'
import { useStore } from '@/stores/store'
import MemoryGame from './components/MemoryGame.vue'
import BubbleAnimation from './components/animations/BubbleAnimation.vue'
const store = useStore()
</script>

<style>
.bg-body-gradient-setup {
  background: #1c92d2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #98b7bd, #4f7d96);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #86a4aa, #4f7d96); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.bg-body-gradient-defualt {
  background: #4f7d96;
}

</style>
