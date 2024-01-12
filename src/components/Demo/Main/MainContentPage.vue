<script setup lang="ts">
import {useViewerPageStore} from "@/stores/storeViewerPage";
import MainContentPageWhatsNew from "@/components/Demo/Main/MainContentPageWhatsNew.vue";
import MainContentPageInstallation from "@/components/Demo/Main/MainContentPageInstallation.vue";
import MainContentPageUsage from "@/components/Demo/Main/MainContentPageUsage.vue";

const viewerPageStore = useViewerPageStore()
</script>

<template>
  <div>
    <section>
      <MainContentPageWhatsNew v-if="viewerPageStore.page === 'whats-new'" />
      <MainContentPageInstallation v-if="viewerPageStore.page === 'installation'" />
      <MainContentPageUsage v-if="viewerPageStore.page === 'usage'" />
    </section>
  </div>
</template>

<style scoped lang="scss">
section {
  padding: 16px;
  text-align: left;
  max-height: 468px;
  overflow-y: auto;

  :deep(h3:first-child) {
    margin-top: 0;
  }
}
</style>
