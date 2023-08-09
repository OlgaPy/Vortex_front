// Import App scss
import './styles/index.scss'

import App from './App.vue'
import router from './providers/router'
import { createPinia } from 'pinia'

import {useThemeStore} from "@/shared/stores/ThemeStore";

export {App}
export const registerPlugins = (app: App<Element>): void => {
    app.use(createPinia())
        .use(router)
        .use(Quasar, {
            plugins: {}, // import Quasar plugins and add here
            lang: quasarLang,
        })
}


export {useThemeStore}