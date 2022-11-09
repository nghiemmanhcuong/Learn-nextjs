import {getJokes} from '../axiosApi/jokes';
import Layout from '../components/Layout';
import { Button, Card, Container } from 'react-bootstrap';
import {AiOutlineRollback} from 'react-icons/ai'
import Link from 'next/link';

// Dữ liệu phụ thuộc vào mội request Nhưng vẫn tạo ra các file html tĩnh nễn vẫn tốt cho SEO
export const getServerSideProps = async () => {
    const jokes = await getJokes();

    if(!jokes) {
        return {
            notFound:true, // Chuyển đến trang 404
        }
        // return {
        //     redirect: {
        //         destination:'/posts',
        //         permanent:true
        //     } // Chuyển đến trang mong muốn
        // }
    }else {
        return {
            props: {
                jokes,
            },
        };
    }
};

const Jokes = ({jokes}) => {

    return (
      <Layout>
        <Container className="mt-3">
            <Card>
                <Card.Header>
                    <Card.Title>Mẩu chuyện của bạn</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{jokes.value}</Card.Text>
                    <Link href='/' passHref legacyBehavior>
                        <Button variant='primary'><AiOutlineRollback /> Back</Button>
                    </Link>
                </Card.Body>
                <Card.Footer>Careted At: {jokes.created_at}</Card.Footer>
            </Card>
        </Container>
      </Layout>
    );
};

export default Jokes;
