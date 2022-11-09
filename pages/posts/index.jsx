import React from 'react';
import Layout from '../../components/Layout';
import {getPosts} from '../../axiosApi/posts';
import {Card, Container, Stack} from 'react-bootstrap';
import styles from '../../styles/globals.module.css';
import Link from 'next/link';

const index = ({posts}) => {
    return (
        <Layout>
            <Container className={styles.containerPost}>
                <h1 className={styles.titlePost}>My all posts</h1>
                <Stack gap={3}>
                    {posts.map((post) => (
                        <Card key={post.id} className='shadow'>
                            <Card.Header className={styles.titlePostCard}>{post.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>{post.body}</Card.Text>
                                <Link href={`/posts/${post.id}`} passHref legacyBehavior>
                                    <Card.Link>See more</Card.Link>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = await getPosts(10);

    return {
        props: {
            posts,
        },
    };
};

export default index;
