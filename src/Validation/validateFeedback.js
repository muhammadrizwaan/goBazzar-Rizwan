import Validator from 'validator'
import isEmpty from './isEmpty'

export default function validateFeedback(email, name, message) {
    let errors = {}

    name = !isEmpty(name) ? name : '';
    email = !isEmpty(email) ? email : '';
    message = !isEmpty(message) ? message : '';


    if(!Validator.isLength(name, {min: 2, max: 25})) {
        errors.name = '* Name must be between 2 and 30 characters';
    } 

    if(Validator.isEmpty(name)) {
        errors.name = '* Please Enter your Name';
    }

    if(!Validator.isEmail(email)) {
        errors.email = '* Please Enter a Valid Email address';
    }

    if(Validator.isEmpty(email)) {
        errors.email = '* Email field is required';
    }

    if(Validator.isEmpty(message)) {
        errors.message = '* Please Enter your Message';
    }

    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}