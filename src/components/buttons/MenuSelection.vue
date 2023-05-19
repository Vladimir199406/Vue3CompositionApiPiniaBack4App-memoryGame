<template>
  <button
    class="bg-dark-idle hover:bg-dark-hover rounded-4xl text-white font-bold text-md w-full"
    :style="{background: selected ? '#7191A5' : ''}"
  >
    <slot />
  </button>
</template>

<script setup>
//props
const props = defineProps({
  selected: {
    type: Boolean,
    default: false
  }
})
</script>
