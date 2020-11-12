import {DATA_PUSH_SUCCES} from './actionTypes';
import axios from '../../../axios/axios';

export let pushToServerData = item => async (dispatch, getState) => {
    let {nameOfBook, numberOfPrice, tags,description, author, imgPath} = {...item};
    let arrayOfBooksFromState = getState().adminPanel.arrayOfBooks.concat();

    
        

    let objectOfBook = {
        name: nameOfBook.value,
        price: numberOfPrice.value,
        listOfTags: tags.value.split(','),
        descriptionText: description.value,
        pathToImg: imgPath.value,
        authorInitials: author.value
    };

    arrayOfBooksFromState.push(objectOfBook);

       
    try{
        let res = await axios.post('/books.json', objectOfBook);
        dispatch(dataPushSucces);
    }catch(e){
        console.log(e)
    }
};

export let dataPushSucces = () => ({
    type: DATA_PUSH_SUCCES
});