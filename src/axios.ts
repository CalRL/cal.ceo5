import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.cal.ceo/api',
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
    },
    timeout: 10000,
});