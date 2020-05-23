import Validator from 'validator'
import isEmpty from './isEmpty'

export default (email, old_password, new_password) => {
    let errors = {}

    email = !isEmpty(email) ? email : '';
    old_password = !isEmpty(old_password) ? old_password : '';
    new_password = !isEmpty(new_password) ? new_password : '';

    if(!Validator.isEmail(email)) {
        errors.email = '* Please Enter a Valid Email address';
    }

    if(Validator.isEmpty(email)) {
        errors.email = '* Email field is required';
    }

    if(Validator.isEmpty(old_password)) {
        errors.old_password = '* Password field is required';
    }

    if(!Validator.isLength(new_password, {min: 6, max: 30})) {
        errors.new_password = '* Password must be atleast 6 characters';
    }

    if(Validator.isEmpty(new_password)) {
        errors.new_password = '* Password field is required';
    }

    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
