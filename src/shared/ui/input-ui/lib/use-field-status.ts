import {ref} from "vue";
import {FieldValueError, InputStates} from "../types";

export const useFieldStatus = () => {
	const fieldStatus = ref<InputStates>();

	const changeFieldStatus = (value: string | null, errors: FieldValueError[]) => {
		if (value) {
			if (errors.length > 0) {
				fieldStatus.value = InputStates.ERROR;
			} else {
				fieldStatus.value = InputStates.SUCCESSFUL;
			}
		} else {
			fieldStatus.value = InputStates.NONE;
		}
	};

	return { fieldStatus, changeFieldStatus };
};
