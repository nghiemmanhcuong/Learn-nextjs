import instance from './instance';

export const getPosts = (limit = null) => {
    const url = `/posts/${limit ? `?_limit=${limit}` : ''}`;
    return instance.get(url);
};

export const getPostIds = async (limit) => {
    const posts = await getPosts(limit);

    return posts.map((post) => ({params: {id: `${post.id}`}}));
};

export const getPostById = async (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
