import {Button, Card, Container} from 'react-bootstrap';
import {getPostIds, getPostById} from '../../axiosApi/posts';
import Layout from '../../components/Layout';
import styles from '../../styles/globals.module.css';
import {AiFillHeart} from 'react-icons/ai';
import {useEffect, useState} from 'react';

// Sử dụng khi một trang có định tuyến động, mà cần phải xác định danh sách các đường dẫn sẽ được tạo tĩnh
export const getStaticPaths = async () => {
    const paths = await getPostIds();

    return {
        paths,
        fallback: false, // nếu giá trị là false thì bất kể path nào không được return sẽ chuyển đến trang 404
    };
};

export const getStaticProps = async ({params}) => {
    const post = await getPostById(params.id);

    return {
        props: {post: post},
    };
};

const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
};

const PostDetail = ({post}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [like, setLike] = useState('Like');

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLike('Liked');
                setIsLoading(false);
            });
        }
    }, [isLoading]);

    const handleLikePost = () => {
        setIsLoading(true);
    };

    return (
        <Layout>
            <Container className={styles.containerPost}>
                <h2 className={styles.titlePost}>Chi tiết bài viết</h2>
                <Card className={[styles.textCenter,'shadow'].join(' ')}>
                    <Card.Header>Bài viết số {post.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Button
                            variant={`${like == 'Like' ? 'primary' : 'danger'}`}
                            size='sm'
                            onClick={like == 'Like' ? handleLikePost : null}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : like}
                            <AiFillHeart />
                        </Button>
                    </Card.Body>
                    <Card.Footer>Cảm ơn bạn đã xem bài viết!!!</Card.Footer>
                </Card>
            </Container>
        </Layout>
    );
};

export default PostDetail;
