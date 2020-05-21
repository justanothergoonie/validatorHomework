class PhoneValidator extends Validator {
	constructor(parameters) {
		super(parameters);
		console.log('PhoneValidator()', this.options);

		console.log(
			'looking for non-american phones?',
			this.options.nonAmerican
		);
	}

	validate(event) {
		console.log('phoneValidator.validate', event);
		super.validateBefore(event);
		console.log('running validation for PhoneValidator', event);

		const value = event.target.value;
		console.log('value', value);
		if (/^\s*\(?\d{3}\)?[\-\. ]?\d{3}[\-\. ]?\d{4}$\s*$/.test(value)) {
			console.log('valid phone number!');
			this.isValid = true;
			event.target.classList.remove('invalid');
		} else {
			this.isValid = false;
			console.log('not a valid phone number');
			event.target.classList.add('invalid');
		}

		super.validateAfter(event);
	}
}
