import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget"
import { Link } from 'react-router-dom';

const navegacion = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/home">
                    <Navbar.Brand>NEWphone</Navbar.Brand>
                </Link>
                <Link to="/tienda">
                    <p>Tienda</p>
                </Link>
                <Link to="/cart">
                    <div><CartWidget/></div>
                </Link>
            </Container>
        </Navbar>
    );
}

export default navegacion