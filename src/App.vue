<script setup lang="ts">
import {onBeforeMount} from "vue";
import {useViewerPageStore} from "@/stores/storeViewerPage";
import {useViewerPlatformStore} from "@/stores/storeViewerPlatform";

import Header from "@/components/Demo/Header/Header.vue";
import MainNav from "@/components/Demo/Main/MainNav.vue";
import MainContentPage from "@/components/Demo/Main/MainContentPage.vue";
import MainContentPagePlatformViewer from "@/components/Demo/Main/MainContentPagePlatformViewer.vue";

const viewerPageStore = useViewerPageStore()
const viewerPlatformStore = useViewerPlatformStore()

onBeforeMount(() => {
  viewerPlatformStore.setPlatformFilter(window.location.hash.replace('#', ''))
})

function onLogoClick() {
  viewerPageStore.resetPage()
  viewerPlatformStore.resetPlatformFilter()
}
</script>

<template>
  <Header
      @reset="onLogoClick"
  />

  <main>
    <MainNav />
    <MainContentPagePlatformViewer v-if="viewerPageStore.page === 'platforms'" />
    <MainContentPage v-else />
  </main>
</template>

<style scoped lang="scss">
main {
  position: relative;
  display: grid;
  grid-template-columns: 30% 70%;
  width: 720px;
  max-width: 90vw;
  min-height: 500px;
  max-height: 500px;

  border: 1px solid var(--demo-border-color);
  border-radius: 4px;
  margin-bottom: 16px;
}

footer {
  text-align: center;
  font-size: 14px;
  line-height: 15px;
  opacity: 0.2;
}
</style>
