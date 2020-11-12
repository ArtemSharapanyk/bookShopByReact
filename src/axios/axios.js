import axios from 'axios';

export default axios.create({
    baseURL: 'https://book-shop-338c0.firebaseio.com'
});

