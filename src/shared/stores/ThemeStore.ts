import {ref} from 'vue';
import {defineStore} from 'pinia';

export enum Themes {
	DEFAULT = 'default'
}

export enum ThemeModes {
	AUTO = 'auto',
	LIGHT = 'light',
	DARK = 'dark'
}

/**
 * Theme switcher
 */
export const useThemeStore = defineStore('themeStore', () => {
	const html = document.documentElement;
	const animationTime = getComputedStyle(html).getPropertyValue('--transition-default');
	const animationClass = 'animation-theme-switch';
	const theme = ref(html.dataset.theme);

	const getThemeMode = () => {
		if (html.dataset.colorSchema == ThemeModes.AUTO) {
			const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
			if (darkThemeMq.matches) {
				html.setAttribute('data-color-schema', ThemeModes.DARK);
				return ThemeModes.DARK;
			} else {
				html.setAttribute('data-color-schema', ThemeModes.LIGHT);
				return ThemeModes.LIGHT;
			}
		} else return html.dataset.colorSchema;
	};

	const themeMode = ref(getThemeMode());

	const startAnimation = () => html.classList.add(animationClass);
	const stopAnimation = () =>
		setTimeout(() => html.classList.remove(animationClass), parseInt(animationTime));
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
		setThemeMode
	};
});
