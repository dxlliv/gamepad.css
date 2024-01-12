import {App} from "vue";
import pinia from "./modules/pinia"
import highlight from "./modules/highlight"

export const plugins = {
  install: (app: App) => {
    app.use(pinia)
    app.use(highlight)
  },
}
