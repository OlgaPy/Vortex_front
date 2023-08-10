// Import App scss
import './styles/index.scss'

import App from './App.vue'
import router from './providers/router'
import {createPinia} from 'pinia'

export {App}

export const registerPlugins = (app: App<Element>): void => {
    app.use(createPinia()).use(router);
}