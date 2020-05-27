class EmailValidator extends Validator {
	constructor(parameters) {
		super(parameters);
		console.log('EmailValidator()', this.options);
	}

	validate(event) {
		console.log('emailValidator.validate', event);
		super.validateBefore(event);
		console.log('running validation for EmailValidator', event);

		const value = event.target.value;
		console.log('value', value);
		if (/\w+@\w+\.\w+/.test(value)) {
			console.log('valid email address!');
			this.isValid = true;
		} else {
			this.isValid = false;
			console.log('not a valid email address');
		}

		super.validateAfter(event);
	}
}
