import { GET_DATA_BOOK_SUCCES } from "../../actions/bookPage/actionTypes";

let initialState = {
    book: {},
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DATA_BOOK_SUCCES:
            return {...state, loading: true, book: action.value}
        default:
            return state  
    }
};