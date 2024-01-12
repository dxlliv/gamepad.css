<script setup lang="ts">
defineProps<{
  source: string
  highlight: string
}>()
</script>

<template>
  <pre v-highlightjs="source">
    <code :class="highlight" />
  </pre>
</template>

<style scoped lang="scss">
pre {
  user-select: text;
  margin: 0;
  border: 1px solid #333;
  background: #222;
  white-space: nowrap;
  tab-size: 3;

  code.hljs {
    background: none;
    padding: 16px;
    white-space: pre;
  }
}
</style>
