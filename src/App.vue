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

    <div class="license">
      Released under the MIT License.<br />
      Copyright &copy; 2024 <a href="https://dxlliv.github.io" target="_blank">dxlliv</a>
    </div>
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
  margin: 0 auto;
  margin-bottom: 16px;

  @media(max-width: 799px) {
    grid-template-columns: 100%;
    max-height: inherit;
  }

  div.license {
    position: absolute;
    bottom: -48px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.1666666667em !important;
    text-transform: uppercase !important;
    opacity: 0.1;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}

footer {
  text-align: center;
  font-size: 14px;
  line-height: 15px;
  opacity: 0.2;
}
</style>
