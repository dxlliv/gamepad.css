<script setup lang="ts">
import {computed} from "vue";

import {useViewerPlatformStore} from "@/stores/storeViewerPlatform";
import GamepadButton from "@/components/GamepadButton.vue";

const props = defineProps<{
  platform: string
  console?: string
}>()

const viewerPlatformStore = useViewerPlatformStore()

const buttons = computed(() => {
  // show the preview button list of a certain console
  if (props.console && viewerPlatformStore.platforms[props.platform].consoles) {
    // @ts-ignore
    return viewerPlatformStore.platforms[props.platform].consoles[props.console].buttons.preview
  }

  // show the list of platform buttons
  return viewerPlatformStore.platforms[props.platform].buttons
})
</script>

<template>
  <div class="gamepad-platform-viewer__buttons">
    <h3>
      {{viewerPlatformStore.getPlatformName(platform)}}
      <template v-if="props.console">
        {{viewerPlatformStore.getPlatformConsoleName(platform, props.console)}}
      </template>
    </h3>

    <div>
      <GamepadButton
          v-for="button of buttons"
          :key="button"
          :button="button"
          :platform="platform"
          :variant="props.console"
          clickable
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.gamepad-platform-viewer__buttons {
  h3 {
    margin-top: 0;
    margin-bottom: 12px;
  }

  div {
    padding-bottom: 3px;
  }

  .gamepad-button-wrapper {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
