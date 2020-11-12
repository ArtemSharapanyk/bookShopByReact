import React from 'react';
import './searchBar.css';

export default ({findShopItemFunc}) => {
    return (
        <input  className='searchBar' type="text" placeholder='Search..' onInput={findShopItemFunc} />
    )
}