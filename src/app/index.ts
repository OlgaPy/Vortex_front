// Import App scss
import './styles/index.scss'
import './themes/fonts/index.scss';
import './themes/colors/index.scss';

import {type CreateAppFunction} from 'vue';
import App from './App.vue'
import router from './providers/router'
import {createPinia} from 'pinia'

export {App}

export const registerPlugins = (app: ReturnType<CreateAppFunction<Element>>): void => {
    app.use(createPinia()).use(router);
}
