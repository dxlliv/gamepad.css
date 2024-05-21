<script setup lang="ts">
import Code from "@/components/Demo/Code.vue";

defineProps<{
  code: string
}>()
</script>

<template>
  <div class="gamepad-platform-viewer__button-code-viewer">
    <div class="gamepad-platform-viewer__button-code-viewer__bg" v-html="code" />
    <div class="gamepad-platform-viewer__button-code-viewer__container">
      <div>
        <div class="gamepad-platform-viewer__button-code-viewer__inner" v-html="code" />
      </div>
      <div>
        <Code :source="code" highlight="html" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gamepad-platform-viewer__button-code-viewer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: black;
  overflow: hidden;

  &__bg {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(10);
  }

  &__inner {
    position: relative;
    display: grid;
    align-items: center;
    align-content: center;

    &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      opacity: 0.5;
      content: '';
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 30% 70%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(32px);
    background: rgba(38, 38, 38, 0.92);
    border-top: 1px solid var(--demo-border-color);
    text-align: left;

    div {
      align-self: center;

      &:first-child {
        text-align: center;
        height: 100%;
      }
    }

    h6 {
      margin: 0 0 8px 0;
    }

    pre {
      border: 0;
      background: none;
    }

    :deep(code) {
      padding: 0 16px !important;

      ::-webkit-scrollbar {
        width: 0;
      }
      -ms-overflow-style: none;
      scrollbar-width: none
    }

    :deep(.gamepad-button-wrapper) {
      width: 24px;
      transform: scale(2);
      margin: 0 auto;
    }
  }
}
</style>
