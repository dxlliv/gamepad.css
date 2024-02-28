<script setup lang="ts">
import Code from "@/components/Demo/Code.vue";

defineProps<{
  code: string
}>()
</script>

<template>
  <div class="gamepad-platform-viewer__button-code">
    <div class="gamepad-platform-viewer__button-code__bg" v-html="code" />
    <div class="gamepad-platform-viewer__button-code__container">
      <div>
        <div class="gamepad-platform-viewer__button-code__inner" v-html="code" />
      </div>
      <div>
        <Code :source="code" highlight="html" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gamepad-platform-viewer__button-code {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 92px;
  background: black;
  overflow: hidden;

  &__bg {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(10);
  }

  &__container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(32px);
    background: rgba(38, 38, 38, 0.92);
    border-top: 1px solid var(--border-color);
    text-align: left;
    display: grid;
    grid-template-columns: 106px calc(100% - 106px);

    div {
      align-self: center;

      &:first-child {
        text-align: center;
      }
    }

    &__inner {
      padding: 32px;
    }

    h6 {
      margin: 0 0 8px 0;
    }

    pre {
      border-top: 0;
      border-right: 0;
      border-bottom: 0;
    }

    :deep(code) {
      overflow: hidden;
    }

    :deep(.gamepad-button-wrapper) {
      margin-top: -12px;
      transform: scale(2);
    }
  }
}
</style>
