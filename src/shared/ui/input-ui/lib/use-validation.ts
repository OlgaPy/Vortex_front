import {ref} from "vue";
import type {FieldValueError, Validator} from "../types";

export const useValidation = (validators?: Validator[], startErrors?: FieldValueError[]) => {
	const errors = ref<FieldValueError[]>(startErrors || []);

	const hasErrors = () => {
		return errors.value.length > 0;
	};

	const validate = (value: string | null) => {
		errors.value = startErrors || [];

		if (!validators) return;

		for (const validator of validators) {
			const validationResults = validator(value);

			if (!validationResults || !validationResults.errors) continue;

			const collectedErrors: FieldValueError[] = [];

			for (const validationError of validationResults.errors) {
				collectedErrors.push(validationError);
			}

			errors.value = [...errors.value, ...collectedErrors];
		}
	};

	return {errors, validate, hasErrors};
};
