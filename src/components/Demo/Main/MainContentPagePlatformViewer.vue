<script setup lang="ts">
import {formatCode} from "@/utils/utilsDemo";
import {useViewerPlatformStore} from "@/stores/storeViewerPlatform";
import {useViewerButtonStore} from "@/stores/storeViewerButton";

import PlatformConsoleButtons from "@/components/Demo/Platform/PlatformConsoleButtons.vue";
import PlatformConsoleButtonCodeViewer from "@/components/Demo/Platform/PlatformConsoleButtonCodeViewer.vue";

const viewerPlatformStore = useViewerPlatformStore()
const viewerButtonStore = useViewerButtonStore()

function onGamepadButtonClick(e: any) {
  const elementHTML = e.target.closest('.gamepad-button-wrapper').outerHTML
  const buttonCode = formatCode(elementHTML)

  if (viewerButtonStore.code !== buttonCode) {
    viewerButtonStore.setCode(formatCode(elementHTML))
  }
}
</script>

<template>
  <div :class="['gamepad-platform-viewer', {'gamepad-platform-viewer--code-viewer': viewerButtonStore.code}]">
    <template
        v-for="platformCode of Object.keys(viewerPlatformStore.platformsFiltered)"
        :key="platformCode"
    >
      <section
          v-for="consoleCode of Object.keys(viewerPlatformStore.platformsFiltered[platformCode].consoles)"
          :key="consoleCode"
      >
        <PlatformConsoleButtons
            :platform="platformCode"
            :console="consoleCode"
            @click="onGamepadButtonClick"
        />
      </section>
    </template>

  </div>

  <PlatformConsoleButtonCodeViewer
      v-if="viewerButtonStore.code"
      :code="viewerButtonStore.code"
  />
</template>

<style scoped lang="scss">
div.gamepad-platform-viewer {
  overflow-y: auto;
  height: 100%;

  &--code-viewer {
    max-height: 380px;
  }

  section {
    text-align: left;
    padding: 16px;

    &:not(:last-child) {
      padding-bottom: 3px;
    }
  }
}
</style>
