import delayCreater from "../../../LoaderHelper/delayCreater";
import { ADD_ITEM_TO_BASKET,DELETE_ITEM_FROM_BASKET,CHANGE_ACTIVE_TAG, OPEN_CLOSE_BASKET,GET_DATA_START,GET_DATA_SUCCES } from "../../actions/shop/actionTypes";

let initialState = {
    shopItems: [],
    basket: {
        arrayOfBoughtItems: [],
        isOpen: false
    },
    loading: false,
    tags: {
        arrayOfTags: [
            'All',
            'War',
            'Psichology'
        ],
        activeTag: 'All'
    },
};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM_TO_BASKET:
            return {
                ...state, basket: action.value
            }
        case DELETE_ITEM_FROM_BASKET:
            return {...state, basket: action.value}
        case CHANGE_ACTIVE_TAG:
            return {...state, tags: action.value}   
        case OPEN_CLOSE_BASKET:
            return {...state, basket: action.value}    
        case GET_DATA_START:
            return {...state, loading: false}
        case GET_DATA_SUCCES:
            return {...state, loading: true, shopItems: action.value}
        default: 
            return state
    }
};