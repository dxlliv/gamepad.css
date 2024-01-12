<script setup lang="ts">
import Code from "@/components/Demo/Code.vue";
</script>

<template>
  <h3>Installation</h3>
  <Code
      source='npm install gamepad.css'
      highlight="bash"
  />

  <p>
    Import styles into your favorite framework
  </p>
  <Code
      source='import "gamepad.css/styles.min.css";'
      highlight="ts"
  />
  <br />
  <p>
    Or import them directly from jsdelivr.net
  </p>
  <Code
      source='<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/gamepad.css@latest/styles.min.css">'
      highlight="html"
  />
</template>

<style scoped lang="scss">

</style>
