import {defineStore} from "pinia";
import {ref} from "vue";

const LC_THEME_KEY = 'current-theme';

export enum ThemesList {
    WHITE = 'white',
    DARK = 'dark',
}

export const useThemeStore = defineStore('themeStore', () => {
    const savedTheme = localStorage.getItem(LC_THEME_KEY);
    const theme = ref(savedTheme || ThemesList.WHITE);

    function setTheme(newTheme: ThemesList) {
        theme.value = newTheme;
        localStorage.setItem(LC_THEME_KEY, theme.value);
    }

    function setWhite() {
        setTheme(ThemesList.WHITE);
    }

    function setDark() {
        setTheme(ThemesList.DARK);
    }

    return { theme, setWhite, setDark };
});