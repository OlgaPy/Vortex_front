import {ref} from "vue";
import {InputFocusStates} from "../types";

export const useFieldFocusStatus = () => {
	const status = ref<InputFocusStates>();

	const setFieldFocusStatus = (newStatus: InputFocusStates) => {
		status.value = newStatus;
	};

	return { status, setFieldFocusStatus };
}
