import {combineReducers} from 'redux';
import shopReducer from './shop/shop';
import adminPanelReducer from './adminPanel/adminPanelReducer';
import bookPageReducer from './bookPage/bookPageReducer';

export default combineReducers({
    shop: shopReducer,
    adminPanel: adminPanelReducer,
    bookPage: bookPageReducer
});