import React from 'react';
import './Button.css';

export default ({type, clickAction, children, specialClass, disabledState}) => {
    
    let typeOfButton = type || 'submit';
    
    let cls = [
        'Button',
        typeOfButton,
        specialClass ? specialClass : '',
        disabledState ? '' : 'disabledBtn'
    ];

    return (
        <div className={cls.join(' ')} onClick={clickAction}>
            {children}
        </div>
    )
}