import {ref} from "vue";
import type {FieldFocusStates} from "../types";

export const useFieldFocusStatus = () => {
	const status = ref<FieldFocusStates>();

	const setFieldFocusStatus = (newStatus: FieldFocusStates) => {
		status.value = newStatus;
	};

	return { status, setFieldFocusStatus };
}
