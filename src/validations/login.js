import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = input => {
	let errors = {};

	if (validator.isEmpty(input.account)) {
		errors.account = "This field is required";
	}

	if (validator.isEmpty(input.password)) {
		errors.password = "This field is required";
	}

	if (validator.isLength(input.account, {min: 1})) {
		errors.account = ""
	}

	if (validator.isLength(input.password, {min: 1})) {
		errors.password = ""
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
};

export default validateInput;
