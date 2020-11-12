import React from 'react';
import './deleteBasketBtn.css';

export default ({deleteItemFunc}) => {
    return (
        <div className="deleteItemBasketBtn" onClick={deleteItemFunc}>
            del
        </div>
    )
}