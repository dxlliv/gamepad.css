<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  platform: string
  button: string
  variant?: string
  size?: string
  debug?: boolean
}>()


const classes = computed(() => {
  const classList = ['gamepad-button', `gamepad-button-${props.platform}`]

  if (props.button.startsWith('arrow')) {
    classList.push(`gamepad-button--${props.button}`)
  } else {
    classList.push(`gamepad-button-${props.platform}--${props.button}`)
  }

  if (props.variant) {
    classList.push(`gamepad-button-${props.platform}--variant-${props.variant}`)
  }

  if (props.size) {
    classList.push(`gamepad-button--size-${props.size}`)
  }

  if (props.debug) {
    classList.push('gamepad-button--debug')
  }

  return classList
})
</script>

<template>
  <div class="gamepad-button-wrapper">
    <i :class="classes" v-text="button.toUpperCase()" />
  </div>
</template>
