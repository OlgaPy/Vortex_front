import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useMobileNavigationStore = defineStore('mobileNavigationStore', () => {
	const showNavigationPage = ref(false);

	const toggleNavigationPage = () => {
		//TODO close if desktop width
		showNavigationPage.value = !showNavigationPage.value;
	};

	return { showNavigationPage, toggleNavigationPage };
});
