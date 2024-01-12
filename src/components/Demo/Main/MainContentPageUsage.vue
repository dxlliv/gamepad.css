<script setup lang="ts">
import {formatCode} from "@/utils/utilsDemo";
import Code from "@/components/Demo/Code.vue";

const demoButtonCode = formatCode(`<div class="gamepad-button-wrapper"><i class="gamepad-button gamepad-button-playstation gamepad-button-playstation--cross gamepad-button-playstation--variant-ps1">CROSS</i></div>`)
</script>

<template>
  <h3>Usage</h3>
  <p>
    Official components for main frameworks will come soon,<br />
    for now you can simply use your desired icons as follow
  </p>
  <Code
      :source="demoButtonCode"
      highlight="html"
  />
</template>

<style scoped lang="scss">

</style>
