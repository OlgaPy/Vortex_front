import {ref} from 'vue'
import {defineStore} from 'pinia'

const MAX_MOBILE_WIDTH = 1280;

export enum ApplicationOrientations {
	DESKTOP = 'desktop',
	MOBILE = 'mobile'
}

export const useApplicationOrientationStore = defineStore('applicationOrientationStore', () => {
	const orientation = ref(ApplicationOrientations.DESKTOP);

	const setOrientation = (newOrientation: ApplicationOrientations) => {
		orientation.value = newOrientation;
	};

	addEventListener("resize", () => {
		if (window.innerWidth < MAX_MOBILE_WIDTH) {
			setOrientation(ApplicationOrientations.MOBILE);
		} else {
			setOrientation(ApplicationOrientations.DESKTOP);
		}
	});

	return {orientation};
})
