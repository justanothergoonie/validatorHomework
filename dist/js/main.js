"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
new PhoneValidator({
  selector: '[data-validate-phone]',
  nonAmerican: true
});
new EmailValidator({
  selector: '[data-validate-email]'
});
new NameValidator({
  selector: '[data-validate-name]'
});
//# sourceMappingURL=main.js.map
