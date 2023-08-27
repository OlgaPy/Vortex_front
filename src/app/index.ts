import {createPinia} from 'pinia'
import type {CreateAppFunction} from 'vue'

// Import App scss
import './styles/config/index.scss'
import './styles/base/index.scss'
import './themes/index.scss'

// Import App router
import router from './providers/router'
import App from './App.vue'

// Import App directives
import outClickDirective from "@/app/providers/directives/out-click-directive";

export const registerPlugins = (app: ReturnType<CreateAppFunction<Element>>): void => {
	app.use(createPinia()).use(router);

	app.directive('out-click', outClickDirective);
}

export { App }
