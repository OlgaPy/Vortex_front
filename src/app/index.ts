// Import App directives
import outsideClickDirective from '@/app/providers/directives/outside-click-directive';
import {setApiConfig} from '@/shared/api/api';
import {apiConfig} from '@/shared/config/apiConfig';
import {createPinia} from 'pinia';
import type {CreateAppFunction} from 'vue';
import App from './App.vue';

// Import App router
import router from './providers/router';

// Import App scss
import './styles/base/index.scss';
import './themes/index.scss';

export const setupShared = () => {
	setApiConfig(apiConfig);
}

export const registerPlugins = (app: ReturnType<CreateAppFunction<Element>>): void => {
	app.use(createPinia()).use(router);

	app.directive('outside-click', outsideClickDirective);
};

export { App };
