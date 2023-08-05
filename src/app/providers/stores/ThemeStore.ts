import {defineStore} from "pinia";
import {ref} from "vue";

export enum ThemesList {
    WHITE = 'white',
    DARK = 'dark',
}

export const useThemeStore = defineStore('themeStore', () => {
    const theme = ref(ThemesList.WHITE);

    function setWhite() {
        theme.value = ThemesList.WHITE;
    }

    function setDark() {
        theme.value = ThemesList.DARK;
    }

    return { theme, setWhite, setDark };
});