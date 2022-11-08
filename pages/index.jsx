import Layout from '../components/Layout';
import {Carousel} from 'react-bootstrap';
import styles from '../styles/globals.module.css';

export default function Home() {
    return (
        <Layout>
            <Carousel>
                <Carousel.Item>
                    <img
                        src='https://images.pexels.com/photos/4476842/pexels-photo-4476842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        className={styles.slideImage}
                    />
                    <Carousel.Caption>
                        <h3>Hello everyone coming my website</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
                            esse, officia sed earum praesentium harum commodi quisquam deleniti
                            velit nisi sequi? Distinctio explicabo sit quis! Blanditiis architecto
                            iusto aliquam porro!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src='https://images.pexels.com/photos/4439411/pexels-photo-4439411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        className={styles.slideImage}
                    />
                    <Carousel.Caption>
                        <h3>Hello everyone coming my website</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
                            esse, officia sed earum praesentium harum commodi quisquam deleniti
                            velit nisi sequi? Distinctio explicabo sit quis! Blanditiis architecto
                            iusto aliquam porro!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Layout>
    );
}
