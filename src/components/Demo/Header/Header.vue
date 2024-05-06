<script setup lang="ts">
const emit = defineEmits(['reset'])
</script>

<template>
  <header>
    <h1 @click="emit('reset')">gamepad.css</h1>
    <p>
      Collection of CSS buttons for all existing gaming consoles.<br />
      Or at least, all major consoles. Feel free to contribute!
    </p>
    <p>
      <a href="https://www.npmjs.com/package/gamepad.css" target="_blank">
        <img src="https://img.shields.io/npm/v/gamepad.css?color=blue" alt="" />
      </a>
      <a href="https://www.npmjs.com/package/gamepad.css" target="_blank">
        <img src="https://img.shields.io/npm/l/gamepad.css" alt="" />
      </a>
      <a href="https://github.com/dxlliv/gamepad.css" target="_blank">
        <img src="https://img.shields.io/github/stars/dxlliv/gamepad.css?style=social" alt="" />
      </a>
    </p>
  </header>
</template>

<style scoped lang="scss">
header {
  padding-bottom: 20px;

  h1 {
    cursor: pointer;
    font-size: 3.2em;
    line-height: 1.1;
    margin: 0;

    & + p {
      opacity: 0.5;
      margin-bottom: 24px;
    }
  }

  a {
    margin: 0 4px;
  }
}
</style>
