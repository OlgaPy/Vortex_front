import {ref} from 'vue';
import {defineStore} from 'pinia';

export enum Themes {
	DEFAULT = 'default',
};

export enum ThemeModes {
	AUTO = 'auto',
	LIGHT = 'light',
	DARK = 'dark',
};

/**
 * Theme switcher
 */
export const useThemeStore = defineStore('themeStore', () => {
	const html = document.documentElement;
	const animationTime = getComputedStyle(html).getPropertyValue('--transition-default');
	const animationClass = 'animation-theme-switch';
	const theme = ref(html.dataset.theme);
	const themeMode = ref(html.dataset.colorSchema);

	const startAnimation = () => html.classList.add(animationClass);
	const stopAnimation = () => setTimeout(() => html.classList.remove(animationClass), parseInt(animationTime));
	const setTheme = (newTheme: Themes) => {
		startAnimation();
		theme.value = html.dataset.theme = newTheme;
		stopAnimation();
	};
	const setThemeMode = (mode: ThemeModes) => {
		startAnimation();
		themeMode.value = html.dataset.colorSchema = mode;
		stopAnimation();
	};

	return {
		theme,
		themeMode,
		setTheme,
		setThemeMode,
	};
});
