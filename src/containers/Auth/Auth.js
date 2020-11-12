import React from 'react';
import { Component } from 'react';
import './Auth.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import {createControl, validationOfControl} from '../../formCreator/formCreator';

function createForm() {
    return {
        email: createControl({
            type: 'email',
            labelValue: 'Email',
            errorMessage: 'Enter correct data!!',
        }, {
            required: true,
            email: true
        }),
        password: createControl({
            type: 'password',
            labelValue: 'Password',
            errorMessage: 'Password must be longer then 6',
        },{
            required: true,
            minLength: 6
        })
        
    };
}

export default class Auth extends Component{
    
    state = {
        formValided: false,
        formControls:createForm()
    }

    showFormControl(){
        return Object.keys(this.state.formControls).map((controlName, key) => {
            let control = this.state.formControls[controlName];
            
            return (
                <Input
                    type={control.type}
                    value={control.value}
                    valided={control.valided}
                    touched={control.touched}
                    labelValue={control.labelValue}
                    errorMessage={control.errorMessage}
                    onChangeAction={this.onChangeHandler}
                    specialClass='inputAuth'
                    key={key}
                    controlName={controlName}
                />
            )
        })
    }
    

    onChangeHandler = (e, control) => {
        let controlInput = {...this.state.formControls[control]};
        let formControlsObject = {...this.state.formControls};

        let value = e.target.value;

        controlInput.value = value

        controlInput.touched = true;
        controlInput.valided = validationOfControl(controlInput.validation, value);

        formControlsObject[control] = controlInput;

        let isValided = true;

        Object.keys(formControlsObject).forEach(name  => {
            isValided = formControlsObject[name].valided && isValided
            console.log(isValided)
        });
        
        this.setState({
            formControls: formControlsObject,
            formValided: isValided
        })
    }
    
    render(){
        return (
            <div className='Auth'>
                <h2>
                    Log in
                </h2>
                <form>
                    {this.showFormControl()}
                    <Button specialClass={['formBtn']} clickAction={() => console.log('work')} disabledState={this.state.formValided} >
                        Log in
                    </Button>
                    <Button specialClass={['formBtn formRegister']} clickAction={() => console.log('work')} disabledState={this.state.formValided} >
                        Reg
                    </Button>
                
                </form>
            </div>
        )
    }
}