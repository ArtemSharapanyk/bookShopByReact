import React from "react";
import './ListOfCards.css';
import ShopItem from './shopItem/ShopItem';

export default ({arrayOfItems, activeTag,searchState}) => {
    let {foundElements, isSearch} = searchState;
    
    return (
        <ul className='shopCardBlock'>
            {
                !isSearch ? 
                    arrayOfItems.filter(item => {
                        if(item.listOfTags[1] === activeTag || item.listOfTags[0] === activeTag){
                            return item
                        }
                    }).map((item, index) => (
                        <ShopItem itemInfo={item} key={index} />
                    ))
                :   
                    foundElements.length == 0 ?
                        'Ничего не найдено'
                    :
                        foundElements.map((item, index) => (
                            <ShopItem itemInfo={item} key={index} />
                        ))
                        
                    
                    
            }
        </ul>
    )
}