import axios from 'axios';

const instance = axios.create({
    baseURL: 'www.youtube.com',
})

export const API = {
    getData(){
        const data = instance.get();
        return data;
    }
}