// Import App scss
import './assets/index.scss'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ru'

import App from './App.vue'
import router from './providers/router'

import {useThemeStore} from "./providers/stores/ThemeStore";

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