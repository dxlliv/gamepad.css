import {defineStore} from "pinia";
import {configPlatforms} from "@/config/configPlatforms";
import {computed, ref} from "vue";

export const useViewerPlatformStore = defineStore("viewer/platform", () => {
    const platforms = configPlatforms
    const platformFilter = ref('')

    const platformsFiltered = computed(() => {
        if (platformFilter.value && Object.prototype.hasOwnProperty.call(platforms, platformFilter.value)) {
            return {
                [platformFilter.value]: platforms[platformFilter.value]
            }
        }

        return platforms
    })

    function setPlatformFilter(platformCode: string) {
        platformFilter.value = platformCode
    }

    function resetPlatformFilter() {
        platformFilter.value = ''

        // reset window hash
        history.pushState('', document.title, window.location.pathname + window.location.search)
    }

    function getPlatform(platformCode: string) {
        return platforms[platformCode]
    }

    function getPlatformName(platformCode: string) {
        return getPlatform(platformCode)?.name
    }

    function getPlatformConsoleName(platformCode: string, consoleCode?: string) {
        const platform = getPlatform(platformCode)

        if (consoleCode && platform.consoles) {
            return platform.consoles[consoleCode].name
        }
    }

    return {
        platforms,
        platformFilter,
        platformsFiltered,
        setPlatformFilter,
        resetPlatformFilter,
        getPlatformName,
        getPlatformConsoleName
    }
})
