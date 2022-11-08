import instance from './instance';

export const getJokes = () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    return instance.get(url);
};
