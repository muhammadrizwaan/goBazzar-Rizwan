import Validator from 'validator'
import isEmpty from './isEmpty'

export default function validateSignUpInput(data, password, confirmPassword) {
    let errors = {}

    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';

    password = !isEmpty(password) ? password : '';
    confirmPassword = !isEmpty(confirmPassword) ? confirmPassword : ''

    if(!Validator.isLength(data.firstName, {min: 2, max: 25})) {
        errors.firstName = '* First Name must be between 2 and 30 characters';
    } 

    if(Validator.isEmpty(data.firstName)) {
        errors.firstName = '* Please Enter your First Name';
    }

    if(!Validator.isLength(data.lastName, {min: 2, max: 25})) {
        errors.lastName = '* Last Name must be between 2 and 30 characters';
    } 

    if(Validator.isEmpty(data.lastName)) {
        errors.lastName = '* Please Enter your Last Name';
    }


    if(!Validator.isEmail(data.email)) {
        errors.email = '* Please Enter a Valid Email address';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = '* Email field is required';
    }

    if(!Validator.isLength(password, {min: 6, max: 30})) {
        errors.password = '* Password must be atleast 6 characters';
    }

    if(Validator.isEmpty(password)) {
        errors.password = '* Password field is required';
    }

    if(Validator.isEmpty(confirmPassword)) {
        errors.confirmPassword = '* Confirm Password field is required';
    }

    if(!Validator.equals(password, confirmPassword)) {
        errors.confirmPassword = '* Passwords must match';
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}