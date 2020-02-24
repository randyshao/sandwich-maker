import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sandwich-maker-9b098.firebaseio.com/'
});

export default instance;