console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

new PhoneValidator({
	selector: '[data-validate-phone]',
	nonAmerican: true,
	errorMessage: 'wrong phone number',
});

new EmailValidator({
	selector: '[data-validate-email]',
	errorMessage: 'invalid email',
});

new NameValidator({
	selector: '[data-validate-name]',
	errorMessage: 'your name is wrong idc what you say',
});
