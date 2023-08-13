// Import App scss
import './styles/index.scss'
import './themes/index.scss';

import router from './providers/router'
import {createPinia} from 'pinia'
import type {App} from "vue";


export const registerPlugins = (app: ReturnType<CreateAppFunction<Element>>): void => {
    app.use(createPinia()).use(router);
}

export * as AppRoot from './App.vue';
