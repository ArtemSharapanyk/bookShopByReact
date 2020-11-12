import {GET_DATA_BOOK_SUCCES} from './actionTypes';
import axios from '../../../axios/axios';

export let getBookData = id => async dispatch => {
    try{
        let {data} = await axios.get(`/books/${id}.json`);
        
        dispatch(getBookDataSucces(data))

    }catch(e){
        console.log(e)
    }
};

export let getBookDataSucces = value => ({
    type: GET_DATA_BOOK_SUCCES,
    value
})