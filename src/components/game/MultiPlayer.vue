<template>
  <div class="flex justify-center gap-6">
    <div
      class="text-center rounded p-3 w-full relative sm:text-left sm:w-64 sm:px-5 lg:flex lg:items-center lg:justify-between lg:rounded-xl"
      :class="
        store.gameInstance.turn === index
          ? ['bg-primary-idle', 'arrow-up', 'current-turn']
          : ['bg-secondary-idle']
      "
      v-for="(score, index) in store.gameInstance.scores"
      :key="index"
    >
      <p
        class="font-bold lg:text-lg"
        :class="store.gameInstance.turn === index ? ['text-white'] : ['text-title ']"
      >
        <span class="sm:hidden">P</span><span class="hidden sm:inline">Player </span>{{ index + 1 }}
      </p>
      <p
        class="text-2xl font-bold lg:text-3xl"
        :class="store.gameInstance.turn === index ? ['text-white'] : ['text-dark-active']"
      >
        {{ score }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from '@/stores/store'

//data
const store = useStore()
</script>

<style>
.arrow-up::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 50%;
  transform: translate(-50%, -100%);
  border: 10px solid transparent;
  border-bottom: 10px solid #fda214;
}
@media (min-width: 640px) {
  .arrow-up::before {
    border-width: 14px;
  }
}
@media (min-width: 1024px) {
  .arrow-up::before {
    border-width: 18px;
  }
  .current-turn::after {
    content: 'CURRENT TURN';
    letter-spacing: 5px;
    font-size: 13px;
    font-weight: bold;
    position: absolute;
    width: 100%;
    top: 125%;
    left: 0;
    text-align: center;
  }
}
</style>
