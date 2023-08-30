import { ref } from 'vue'
import { defineStore } from 'pinia'

//TODO
export const useProfileStore = defineStore('profileStore', () => {
	const profile = ref(null);

	const isAuth = () => {
		return false;
	}

	return {
		profile,
		isAuth
	};
})
