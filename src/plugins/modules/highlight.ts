import 'highlight.js/styles/solarized-light.css'
import VueHighlightJS from 'vue3-highlightjs'
import {App} from "vue";

export default {
    install: (app: App) => {
        app.use(VueHighlightJS)
    }
}