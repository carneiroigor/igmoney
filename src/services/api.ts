import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://igmoney-seven.vercel.app/api',
})