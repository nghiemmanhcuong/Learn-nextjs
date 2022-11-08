import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(async (config) => {
    return config;
});

instance.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        } else {
            return response;
        }
    },
    (error) => {
        throw error;
    },
);

export default instance;
