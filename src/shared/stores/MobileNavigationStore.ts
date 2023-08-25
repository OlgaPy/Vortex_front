import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMobileNavigationStore = defineStore('mobileNavigationStore', () => {
	const showNavigationPage = ref(false)

	const toggleNavigationPage = () => {
		showNavigationPage.value = !showNavigationPage.value
	}

	return { showNavigationPage, toggleNavigationPage }
})
