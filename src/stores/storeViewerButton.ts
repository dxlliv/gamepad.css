import {defineStore} from "pinia";
import {Ref, ref} from "vue";

export const useViewerButtonStore = defineStore("viewer/button", () => {
    const code: Ref<null | string> = ref(null)

    function setCode(html: string) {
        code.value = html
    }

    function resetCode() {
        code.value = null
    }

    return {
        code,
        setCode,
        resetCode,
    }
})
