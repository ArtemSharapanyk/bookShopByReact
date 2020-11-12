import React from 'react';
import './BasketBtn.css';

export default ({cardBtn, addElementFunc, openCloseFunc, arrayOfBoughtItems, isOpen}) => {
    
    let cls = [
        'shopBasketBtn',
        !cardBtn ? 'mainBasketBtn' : '',
        isOpen ? 'fixBagMainBasketBtn' : ''
    ];

    return (
        <div className={cls.join(' ')} onClick={cardBtn ? addElementFunc : openCloseFunc }>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            {!cardBtn ? 
                <div className="info">
                    <div className="numberOfElements">
                        {arrayOfBoughtItems.length}
                    </div>
                    <div className="coastOfElements">
                        {arrayOfBoughtItems.map(item => +item.price).reduce((item, currentValue) => item + currentValue, 0)} $  
                    </div>
                </div>
                      :
                null
            }
        </div>
    )
}