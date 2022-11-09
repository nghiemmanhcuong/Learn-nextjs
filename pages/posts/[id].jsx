import {Button, Card, Container, Spinner} from 'react-bootstrap';
import {getPostIds, getPostById} from '../../axiosApi/posts';
import Layout from '../../components/Layout';
import styles from '../../styles/globals.module.css';
import {AiFillHeart} from 'react-icons/ai';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

// Sử dụng khi một trang có định tuyến động, mà cần phải xác định danh sách các đường dẫn sẽ được tạo tĩnh
export const getStaticPaths = async () => {
    const paths = await getPostIds(5);

    return {
        paths,
        // fallback: false, // nếu giá trị là false thì bất kể path nào không được return sẽ chuyển đến trang 404
        fallback: true, // path nào không returned ngay lập tức thì sẽ hiển thị trang tạm thời => đợi getStaticProps chạy xong => hiển thị trang hoàn chỉnh
    };
};

export const getStaticProps = async ({params}) => {
    const post = await getPostById(params.id);

    return {
        props: {post: post},
        revalidate:1 // Bất cứ khi nào có người truy cập vào trang nó sẽ kiểm tra trên data base xem có sự thay đổi không nếu có nó sẽ pre-rendered lại trang khác
        
    };
};

const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
};

const PostDetail = ({post}) => {
    const router = useRouter();
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

    // Nếu trang hoàn chỉnh chưa được tạo xong isFullback của router luôn bằng true
    // Và trang tạm thời sẽ được hiển thị

    if (router.isFallback) {
        return (
            <Layout>
                <Container fluid={true} className="d-flex justify-content-center mt-3">
                    <Spinner animation='border' variant='primary' />
                </Container>
            </Layout>
        );
    }

    // Khi getStaticProps chạy xong nó sẽ tạo ra nhưng trang mới hoàn chỉnh đưa vào danh sách pre-rendered
    // Và những lần sau khi trang tạm thời sẽ không được tạo ra

    return (
        <Layout>
            <Container className={styles.containerPost}>
                <h2 className={styles.titlePost}>Chi tiết bài viết</h2>
                <Card className={[styles.textCenter, 'shadow'].join(' ')}>
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
