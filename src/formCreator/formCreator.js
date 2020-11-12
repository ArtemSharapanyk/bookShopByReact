import is from 'is_js';

export function createControl(config,validations) {
    return {
        ...config,
        validation: validations,
        value: '',
        touched: false,
        valided: false,
    };
}

export function validationOfControl(validation, valueofInput) {
    if(!validation){
        return true
    }

    let controlValided = true;
    let value = valueofInput.trim();

    if(validation.required){
        controlValided = value !== '' && controlValided
    }
    if(validation.email){
        controlValided = is.email(value) && controlValided
    }
    if(validation.isNumber){
        controlValided =  value - 0  && controlValided
    }
    if(validation.minLength){
        controlValided =  value.length >= 6  && controlValided
    }

    return controlValided;
}