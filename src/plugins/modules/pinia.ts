import {App} from "vue";
import {createPinia} from "pinia";

export default {
  install: (app: App) => {
    app.use(createPinia())
  },
}
