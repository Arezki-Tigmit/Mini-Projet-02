import { FormControl, ValidationErrors } from '@angular/forms';

const ALPHABETIC_REGEX = /^[a-zA-Z]*$/;
const ALPHABETIC_VALIDATION_ERROR = { alphaNumericError: 'only alphabetic values are allowed' }

export function alphabeticValidator(control: FormControl): ValidationErrors | null {
    return ALPHABETIC_REGEX.test(control.value) ? null : ALPHABETIC_VALIDATION_ERROR;
}