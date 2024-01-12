<script setup lang="ts">
import {useViewerPlatformStore} from "@/stores/storeViewerPlatform";
import {useViewerButtonStore} from "@/stores/storeViewerButton";
import {useViewerPageStore} from "@/stores/storeViewerPage";

const viewerPageStore = useViewerPageStore()
const viewerPlatformStore = useViewerPlatformStore()
const viewerButtonStore = useViewerButtonStore()

const pages = [
  {
    title: "What's new",
    code: "whats-new",
  },
  {
    title: "Installation",
    code: "installation",
  },
  {
    title: "Usage",
    code: "usage",
  },
]

function onPageClick(pageCode: string) {
  viewerPageStore.setPage(pageCode)
  viewerPlatformStore.resetPlatformFilter()
  viewerButtonStore.resetCode()
}

function onPlatformClick(platformCode: string) {
  viewerPageStore.setPage('platforms')
  viewerPlatformStore.setPlatformFilter(platformCode)
  viewerButtonStore.resetCode()
}
</script>

<template>
  <nav>
    <ul>
      <li
          v-for="page of pages"
          @click="onPageClick(page.code)"
          :class="{active: page.code === viewerPageStore.page}"
      >
        <a v-text="page.title" />
      </li>
    </ul>
    <hr />
    <h6>Platforms</h6>
    <ul>
      <li
          v-for="platformCode of Object.keys(viewerPlatformStore.platforms)"
          :class="{active: viewerPlatformStore.platformFilter === platformCode}"
          @click="onPlatformClick(platformCode)"
      >
        <a
            :id="platformCode"
            v-text="viewerPlatformStore.getPlatformName(platformCode)"
            :href="`#${platformCode}`"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  text-align: left;
  background: rgba(255, 255, 255, 0.015);
  border-right: 1px solid var(--border-color);

  ul {
    margin: 0;
    padding: 12px 0;
    list-style-type: none;

    li {
      cursor: pointer;

      &:not(:hover) {
        opacity: 0.65;
      }

      &.active {
        background: rgba(255, 255, 255, 0.025);
        opacity: 1;
      }

      a {
        display: block;
        color: inherit;
        text-decoration: none;
        padding: 4px 16px;
      }
    }
  }

  hr {
    background: var(--border-color);
    height: 1px;
    border: 0;
    margin: 0;
  }

  h6 {
    margin: 20px 0 -4px 0;
    padding: 0 16px;
  }
}
</style>
