import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://cal.ceo',
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
    },
    timeout: 10000,
});