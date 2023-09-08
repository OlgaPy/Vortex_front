import {defineStore} from 'pinia';
import {ref} from 'vue';

//TODO finished store
export const useProfileStore = defineStore('profileStore', () => {
	const profile = ref(null);

	const isAuth = () => {
		return false;
	};

	return {
		profile,
		isAuth
	};
});
