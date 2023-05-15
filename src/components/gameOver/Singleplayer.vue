<template>
  <div class="flex flex-col gap-6 sm:gap-10">
    <div class="text-center">
      <h2 class="text-body-bg font-bold text-2xl sm:text-6xl">Victory</h2>
      <p class="text-title font-bold text-sm sm:text-lg">{{ staticText.gameOver }}</p>
    </div>
    <div class="flex flex-col gap-2 sm:gap-4">
      <div
        class="rounded-md font-bold px-4 py-3 flex justify-between items-center bg-secondary-idle sm:px-8"
      >
        <p class="text-xs text-title sm:text-lg">Your {{ staticText.timeElapsed }}</p>
        <p class="text-xl text-dark-active sm:text-3xl">{{ minutes }}:{{ seconds }}</p>
      </div>
      <div
        class="rounded-md font-bold px-4 py-3 flex justify-between items-center bg-secondary-idle sm:px-8"
      >
        <p class="text-xs text-title sm:text-lg">{{ staticText.moves }} Taken</p>
        <p class="text-xl text-dark-active sm:text-3xl">
          {{ store.gameInstance.turn }} {{ staticText.moves }} Done
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/store'
import { staticText } from '@/state/staticTextsState'

//data
const store = useStore()

//computed
const seconds = computed(() => {
  return (store.gameInstance.time % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
})
const minutes = computed(() => {
  return Math.floor(store.gameInstance.time / 60)
})
</script>
