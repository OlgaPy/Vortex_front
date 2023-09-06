import {defineStore, storeToRefs} from 'pinia';
import {computed, ref} from 'vue';

const TEMP_SETTINGS_KEY = 'user-settings';

export enum EPostActionsDirection {
	NORMAL = 'normal',
	INVERTED = 'inverted'
}

export interface IUserSettings {
	postActionsDirection: EPostActionsDirection;
}

const initialSettings: IUserSettings = {
	postActionsDirection: EPostActionsDirection.NORMAL
};

export const useUserSettingsStore = defineStore('userSettingsStore', () => {
	/* later change getting settings method to api
		#needApiMethod
	 */
	const storageSettings = localStorage.getItem(TEMP_SETTINGS_KEY);
	const savedSettings = storageSettings
		? (JSON.parse(storageSettings) as IUserSettings)
		: initialSettings;
	const settings = ref(savedSettings);

	function setPostActionsDirection(direction: EPostActionsDirection) {
		settings.value = {
			...settings.value,
			postActionsDirection: direction
		};

		saveSettings(settings.value);
	}

	/* later change saving settings method to api
		#needApiMethod
	 */
	function saveSettings(settings: IUserSettings) {
		localStorage.setItem(TEMP_SETTINGS_KEY, JSON.stringify(settings));
	}

	return { settings, setPostActionsDirection };
});

export const useInvertedPostActions = () => {
	const settingsStore = useUserSettingsStore();
	const { settings } = storeToRefs(settingsStore);
	const settingsValue = settings.value as IUserSettings;

	const direction = settingsValue.postActionsDirection || EPostActionsDirection.NORMAL;
	return computed(() => direction === EPostActionsDirection.INVERTED);
};
