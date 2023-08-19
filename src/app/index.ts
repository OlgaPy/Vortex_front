// Import App scss
import './styles/config/index.scss';
import './styles/base/index.scss';
import './themes/index.scss';

import router from './providers/router'
import {createPinia} from 'pinia'
import type {CreateAppFunction} from "vue";
import App from './App.vue';

export const registerPlugins = (app: ReturnType<CreateAppFunction<Element>>): void => {
    app.use(createPinia()).use(router);
}

export {App};
