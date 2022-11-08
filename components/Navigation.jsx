import Link from 'next/link';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Link href='/' passHref legacyBehavior>
                    <Nav.Link>
                        <Navbar.Brand>My Next App</Navbar.Brand>
                    </Nav.Link>
                </Link>
                <Nav>
                    <Link href='/' passHref legacyBehavior>
                        <Nav.Link>Home</Nav.Link>
                    </Link> 
                    <Link href='/posts' passHref legacyBehavior>
                        <Nav.Link>Posts</Nav.Link>
                    </Link> 
                    <Link href='/jokes' passHref legacyBehavior>
                        <Nav.Link>Jokes</Nav.Link>
                    </Link> 
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
