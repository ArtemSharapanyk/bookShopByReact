import React from 'react';
import { Component } from 'react';
import './AdminPanel.css';
import {createControl, validationOfControl} from '../../formCreator/formCreator';
import Input from '../../components/UI/Input/Input';
import { Fragment } from 'react';
import Button from '../../components/UI/Button/Button';
import { connect } from 'react-redux';
import { pushToServerData } from '../../redux/actions/adminPanel/actionCreators';

function createForm(){
    return {
        nameOfBook: createControl({
            type: 'text',
            labelValue: 'Name',
            errorMessage: ''
            
        }, {
            required: true
        }),
        numberOfPrice: createControl({
            type: 'text',
            labelValue: 'Price',
            errorMessage: ''
            
        }, {
            required: true,
            isNumber: true
        }),
        tags: createControl({
            type: 'text',
            labelValue: 'Tags',
            errorMessage: ''
            
        }, {
            required: true
        }),
        description: createControl({
            type: 'text',
            labelValue: 'Description',
            errorMessage: ''
            
        }, {
            required: true
        }),
        author: createControl({
            type: 'text',
            labelValue: 'Author',
            errorMessage: ''
        },{
            required: true
        }),
        imgPath: createControl({
            type: 'text',
            labelValue: 'Img path',
            errorMessage: ''
        },{
            required: true
        })

    }
};

class AdminPanel extends Component{

    state = {
        formControls: createForm(),
        formValided: false,
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
        });
        
        this.setState({
            formControls: formControlsObject,
            formValided: isValided
        })
    } 

    pushBooksToServer =  () => {
        this.props.pushBooksToServer({...this.state.formControls});
        
        this.setState({
            formValided: false,
            formControls:  createForm()
        });    
    }


    render(){
        
        return (
            <div className="adminPanel">
                
                {
                    Object.keys(this.state.formControls).map((item, key) => {
                        
                        let control = this.state.formControls[item]

                        return (   
                                <Input
                                    type={control.type}
                                    value={control.value}
                                    valided={control.valided}
                                    touched={control.touched}
                                    labelValue={control.labelValue}
                                    errorMessage={control.errorMessage}
                                    onChangeAction={this.onChangeHandler}
                                    keyId={key}
                                    key={key}
                                    controlName={item}
                                    specialClassErrorBlock={'noErrorBlock'}
                                />
                        )
                    })
                }
                <Button specialClass={'AdminBtnSubmit'} disabledState={this.state.formValided} clickAction={this.pushBooksToServer} >
                    Add book
                </Button>
            </div>
        )
    }
}

export default connect(state => ({
    arrayOfBooks: state.adminPanel.arrayOfBooks
}), dispatch => ({
    pushBooksToServer: objectOfItem => dispatch(pushToServerData(objectOfItem))
}))(AdminPanel);