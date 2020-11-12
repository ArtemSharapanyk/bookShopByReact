import React, { Component, Fragment } from 'react';
import './Shop.css';
import ShopList from '../../components/shop/listOfCards/ListOfCards';
import Basket from '../../components/shop/basket/Basket';
import BasketBtn from '../../components/shop/basket/addToBasketBtn/BasketBtn';
import Tags from '../../components/shop/tags/tags';
import SearchBar from '../../components/shop/searchBar/searchBar';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { addItemToBasket, changeTag, deleteItemFromBasket, getDataFromServer, openCloseBasket } from '../../redux/actions/shop/actionCreator';

export let ShopContext = React.createContext();


class Shop extends Component{
    state = {
        search: {
            foundElements: [],
            isSearch: false
        },
    }

    checkBookItemPageHandler = (idOfItem) => {
        this.props.history.push('/books/' + idOfItem)
    }

    async componentDidMount(){
        this.props.getArrayOfBook();
    }

    searchElement = (e) => {
       let {shopItems} = {...this.props};
       let search = {...this.state};
       let inputValue = e.target.value.trim();

       if(inputValue != ''){
            let arrayOfFoundElements = shopItems.filter((item) => {
                let nameOfBook = item.name;

                if(nameOfBook.startsWith(inputValue)){
                    return item
                }
            });

            
            
            search.isSearch = true;
            search.foundElements = arrayOfFoundElements; 

            this.setState({
                search
            });
       }
       else{

            search.isSearch = false;
            search.foundElements = []; 
        
            this.setState({
                search
            })
       }


    }
    
    render(){
        return (
            <Fragment>
                {!this.props.loading ? <Loader/> : null}
                <SearchBar findShopItemFunc={this.searchElement} />
                <Tags activeTag={this.props.tags.activeTag} arrayOfTags={this.props.tags.arrayOfTags} changeTagFunc={this.props.changeTagBtnHandler} />

                <ShopContext.Provider value={[this.props.basketBtnAddHandler, this.props.openCloseBasketBtnHandler, this.checkBookItemPageHandler]}>
                        <ShopList searchState={this.state.search} activeTag={this.props.tags.activeTag} arrayOfItems={this.props.shopItems} />
                </ShopContext.Provider>
                   
                {this.props.basket.isOpen ? <Basket arrayOfBoughtItems={this.props.basket.arrayOfBoughtItems} deleteElementFunc={this.props.deleteItemFromBasketHandler} /> : null}

                <BasketBtn isCard={false} openCloseFunc={this.props.openCloseBasketBtnHandler} arrayOfBoughtItems={this.props.basket.arrayOfBoughtItems} isOpen={this.props.basket.isOpen} /> 
            </Fragment>
        )
    }
}

export default connect(state => ({
    shopItems: state.shop.shopItems,
    basket: state.shop.basket,
    loading: state.shop.loading,
    tags: state.shop.tags
}), dispatch => ({
    basketBtnAddHandler: item => dispatch(addItemToBasket(item)),
    deleteItemFromBasketHandler: index => dispatch(deleteItemFromBasket(index)),
    changeTagBtnHandler: tag => dispatch(changeTag(tag)),
    openCloseBasketBtnHandler: () => dispatch(openCloseBasket()),
    getArrayOfBook: () => dispatch(getDataFromServer())
}))(Shop)