import React from 'react';
import './ShopItem.css';
import BasketBtn from '../../basket/addToBasketBtn/BasketBtn';
import {ShopContext} from '../../../../containers/shop/Shop';
import {withRouter} from 'react-router-dom'

let shopItem =  props => {
    let {itemInfo} = props;
    let nameOfbook = itemInfo.name;

    console.log(nameOfbook)
    
    return (
        <li className="shopItemCard">
            <h3>
                {itemInfo.name}
            </h3>
            <div className="uiBox">
                <span>
                    price: <span>{itemInfo.price}$</span>
                </span>
                <div className="btnBlock">
                    <div className="btnSeeBook" onClick={() => props.history.push(`/books/`+ itemInfo.id)}>
                        Check
                    </div>
                    <ShopContext.Consumer>
                        {func => <BasketBtn cardBtn={true} addElementFunc={func[0].bind(this, itemInfo)} openCloseFunc={func[1]} />}        
                    </ShopContext.Consumer>
                    
                </div>
            </div>
        </li>
    )
}

export default withRouter(shopItem);