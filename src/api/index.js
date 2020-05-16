import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})

export const API = {
    async getData(searchTerm){
        const { data: { items } } = await instance.get('search', {
            params: {
                part: 'snippet',
                maxResults: 10,
                q: searchTerm,
                type: 'video',
                key: process.env.REACT_APP_GOOGLE_API_KEY,
            }
        });

        return items;
    }
}