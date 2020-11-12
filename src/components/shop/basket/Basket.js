import React from 'react';
import './Basket.css';
import BasketDeleteItemBtn from './deleteBasketItemBtn/deleteBasketBtn';

export default ({arrayOfBoughtItems, deleteElementFunc}) => {

        let cls = [
            'Basket',
        ];
        
        return (
            <div className={cls.join(' ')}>
                
                    {arrayOfBoughtItems.length > 0 ? 
                        <ul>
                            {arrayOfBoughtItems.map((item, index) => (
                                <li className={'BasketItem'} key={index}>
                                    {item.name}
                                    <div className="hiddenBlock">
                                        {item.price}$
                                    </div>
                                    <div className="controlBlock">
                                        <BasketDeleteItemBtn deleteItemFunc={deleteElementFunc.bind(this, index)} />
                                    </div>
                                </li>
                            ))}
                        </ul> :
                        'Add some book to basket!'         
                    }
                
            </div>   
        )
    
}