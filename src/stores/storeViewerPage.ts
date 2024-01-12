import {defineStore} from "pinia";
import {Ref, ref} from "vue";

export const useViewerPageStore = defineStore("viewer/page", () => {
    const page: Ref<string> = ref('platforms')

    function setPage(pageCode: string) {
        page.value = pageCode
    }

    function resetPage() {
        page.value = 'platforms'
    }

    return {
        page,
        setPage,
        resetPage,
    }
})
