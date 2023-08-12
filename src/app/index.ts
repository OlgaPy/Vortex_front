// Import App scss
import './styles/index.scss'

import router from './providers/router'
import {createPinia} from 'pinia'
import type {App} from "vue";


export const registerPlugins = (app: App<Element>): void => {
    app.use(createPinia()).use(router);
}

export * as AppRoot from './App.vue';