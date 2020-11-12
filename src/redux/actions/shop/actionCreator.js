import {ADD_ITEM_TO_BASKET,DELETE_ITEM_FROM_BASKET,CHANGE_ACTIVE_TAG, OPEN_CLOSE_BASKET, GET_DATA_START,GET_DATA_SUCCES,GET_DATA_ERROR} from './actionTypes';
import axios from '../../../axios/axios';
import delayLoading from '../../../LoaderHelper/delayCreater';

export let addItemToBasket = item => (dispatch, getState) => {
        let pushedObject = item;
        
        let {arrayOfBoughtItems} = {...getState().shop.basket};
        
        let filterItem = arrayOfBoughtItems.filter((item) => {
            if(item.name === pushedObject.name){
                return true
            }
        });

        if(filterItem.length === 0){
            arrayOfBoughtItems.push(pushedObject);
        }

        let newBasketObject = {...getState().shop.basket};


        newBasketObject.arrayOfBoughtItems = arrayOfBoughtItems;

        dispatch(addItem(newBasketObject));

};

export let addItem = value => ({
    type: ADD_ITEM_TO_BASKET,
    value
});

export let deleteItemFromBasket = (index) => (dispatch, getState) => {
    let basketState = {...getState().shop.basket};
    let arrayOfBoughtItems = basketState.arrayOfBoughtItems;

    arrayOfBoughtItems.splice(index, 1);
    basketState.arrayOfBoughtItems = arrayOfBoughtItems;

    dispatch(deleteItem(basketState))
};

export let deleteItem = value => ({
    type: DELETE_ITEM_FROM_BASKET,
    value
});

export let changeTag = tag => (dispatch, getState) => {
    let tagStateObject = {...getState().shop.tags};

    tagStateObject.activeTag = tag;

    dispatch(changeTagAction(tagStateObject));
};
export let changeTagAction = value => ({
    type: CHANGE_ACTIVE_TAG,
    value
});

export let openCloseBasket = () => (dispatch, getState) => {
        let stateOfBasket = {...getState().shop.basket};
        let body = document.querySelector('body');

        let {isOpen} = stateOfBasket;

        stateOfBasket.isOpen = !isOpen

        dispatch(openCloseBasketAction(stateOfBasket));

        if(stateOfBasket.isOpen){
            body.classList.add('hiddenBody');
        }
        else{
            body.classList.remove('hiddenBody');
        }
};

export let openCloseBasketAction = value => ({
    type: OPEN_CLOSE_BASKET,
    value
});

export let getDataFromServer = () => async dispatch => {
    try{
        dispatch(getDataFromServerStart());

        let {data} = await axios.get('/books.json');
        
        let arrayOfItems = Object.keys(data).map(item => {
            return {
                ...data[item],
                id: item
            }
        });

        dispatch(getDataSucces(arrayOfItems))

    }catch(e){
        dispatch(getDataError(e));
    }
}
export let getDataFromServerStart = () => ({
    type: GET_DATA_START
});
export let getDataSucces = value => ({
    type: GET_DATA_SUCCES,
    value
});
export let getDataError = value => ({
    type: GET_DATA_ERROR,
    value
});