import React, { Fragment } from 'react';
import './Input.css';

export default ({value, type, valided, touched, labelValue, errorMessage, onChangeAction, specialClass, controlName, specialClassErrorBlock, keyId}) => {
    
    let isNotValid = () => {
        return valided
    };

    let cls = [
        'Input',
        touched ? 
            isNotValid() ? 
                'successValid'
            : 'errorValid'
        : null,
    ];

    let clsErrorBlock = [
        'errorBlock',
        specialClassErrorBlock ? specialClassErrorBlock : ''
    ];

    let clsOfWrapDiv = [
        specialClass ? specialClass : '',
        'inputControlBox'
    ]

    let htmlFor = `${labelValue}${Math.random()}`;

    let errorBlock = (
        <div className={clsErrorBlock.join(' ')} key={keyId + errorMessage}>
            {
                errorMessage
            }
        </div>
    );

    return(
        <Fragment key={keyId + 'fargment'}>
            <div className={clsOfWrapDiv.join(' ')} key={keyId + labelValue} >
                <input  value={value} type={type} id={htmlFor} className={cls.join(' ')} onChange={(e) => onChangeAction(e, controlName)} />
                <label htmlFor={htmlFor}>{labelValue}</label>
            </div>
            {
                touched ? 
                    isNotValid() ? 
                        null
                    :  
                        errorBlock
                :
                    null


            }
        </Fragment>
    )
}