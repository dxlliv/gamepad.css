<script setup lang="ts">
import {formatCode} from "@/utils/utilsDemo";
import {useViewerPlatformStore} from "@/stores/storeViewerPlatform";
import {useViewerButtonStore} from "@/stores/storeViewerButton";

import PlatformConsoleButtons from "@/components/Demo/Platform/PlatformConsoleButtons.vue";
import PlatformConsoleButtonCode from "@/components/Demo/Platform/PlatformConsoleButtonCode.vue";

const viewerPlatformStore = useViewerPlatformStore()
const viewerButtonStore = useViewerButtonStore()

function onGamepadButtonClick(e: any) {
  const elementHTML = e.target.closest('.gamepad-button-wrapper').outerHTML

  viewerButtonStore.setCode(formatCode(elementHTML))
}
</script>

<template>
  <div class="gamepad-platform-viewer">
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

    <PlatformConsoleButtonCode
        v-if="viewerButtonStore.code"
        :code="viewerButtonStore.code"
    />
  </div>
</template>

<style scoped lang="scss">
div.gamepad-platform-viewer {
  position: relative;
  height: 100%;

  section {
    text-align: left;
    padding: 16px;
  }
}
</style>
