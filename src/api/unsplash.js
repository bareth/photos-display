import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID AsY8pBglXT_rrhy9O-A7fhY7XxpBmrDtxCwtrIZC9jM'
    }
})


