import {getBooks} from '../axiosApi/books';
import Layout from '../components/Layout';
import {Button, Card, Container} from 'react-bootstrap';
import {AiOutlineRollback} from 'react-icons/ai';
import Link from 'next/link';

const Books = ({books}) => {
    console.log(books);

    return (
        <Layout>
            <Container className='mt-3'>
                {books.map((book, index) => (
                    <Card key={index} className='mb-2 shadow'>
                        <Card.Header>
                            <Card.Title>{book.bookName}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{book.bookContent}</Card.Text>
                            <Link href='/' passHref legacyBehavior>
                                <Button variant='primary'>
                                    <AiOutlineRollback /> Back
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </Layout>
    );
};

// Dữ liệu phụ thuộc vào mội request Nhưng vẫn tạo ra các file html tĩnh nễn vẫn tốt cho SEO
export const getStaticProps = async () => {
    const books = await getBooks();

    return {
        props: {
            books,
        },
    };
};

export default Books;
