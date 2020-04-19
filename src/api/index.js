import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})

export const API = {
    async getData(){
        const { data: { items } } = await instance.get('search', {
            params: {
                part: 'snippet',
                maxResults: 10,
                q: '',
                key: 'AIzaSyBWYi11ydc-CEcYJZfPiWYiFuOrPmyo-gA',
            }
        });
        
        return items;
    }
}