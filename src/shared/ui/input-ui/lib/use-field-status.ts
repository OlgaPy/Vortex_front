import {ref} from "vue";
import type {FieldValueError} from "../types";
import {FieldStates} from "../types";

export const useFieldStatus = () => {
	const status = ref<FieldStates>();

	const changeFieldStatus = (value: string | null, errors: FieldValueError[]) => {
		if (value) {
			if (errors.length > 0) {
				status.value = FieldStates.ERROR;
			} else {
				status.value = FieldStates.SUCCESSFUL;
			}
		} else {
			status.value = FieldStates.NONE;
		}
	};

	return { status, changeFieldStatus };
};
