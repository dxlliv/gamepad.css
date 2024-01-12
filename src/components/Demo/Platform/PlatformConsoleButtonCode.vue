<script setup lang="ts">
import Code from "@/components/Demo/Code.vue";

defineProps<{
  code: string
}>()
</script>

<template>
  <div class="gamepad-platform-viewew__button-code">
    <h6>Gamepad button</h6>
    <Code :source="code" highlight="html" />
  </div>
</template>

<style scoped>
.gamepad-platform-viewew__button-code {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  backdrop-filter: blur(32px);
  border-top: 1px solid var(--border-color);
  text-align: left;

  h6 {
    margin: 0 0 8px 0;
  }
}
</style>