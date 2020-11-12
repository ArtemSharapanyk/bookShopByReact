import React from 'react';
import './ToggleBtnMenu.css';

export default ({menuBtnHandler, isOpen}) => {
    
    let cls = [
        'burgBtn',
        isOpen ? 'activeBurgBtn' : ''
    ];

    return (
        <div onClick={menuBtnHandler} className={cls.join(' ')}>
            <span className='top'></span>
            <span className='bottom'></span>
            <span className='middle'></span>
        </div>
    )
}