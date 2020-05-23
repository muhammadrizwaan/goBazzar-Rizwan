import Validator from 'validator'
import isEmpty from './isEmpty'

export default function validatePostReview(email, name, rating, review) {
    let errors = {}

    name = !isEmpty(name) ? name : '';
    email = !isEmpty(email) ? email : '';
    review = !isEmpty(review) ? review : '';


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

    if(Validator.isEmpty(review)) {
        errors.review = '* Please Enter your Review';
    }

    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}