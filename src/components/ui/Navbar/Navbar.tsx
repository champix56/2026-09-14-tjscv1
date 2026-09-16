import { type FC } from 'react';
import styles from './Navbar.module.css';
import { Container, Nav, Navbar as Nvb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router';
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
  <div className={styles.Navbar} data-testid="Navbar">
    <Nvb bg="dark" data-bs-theme="dark">
        <Container>
          <Link className='navbar-brand' to="/">Navbar</Link>
          <Nav className="me-auto">
            <Link className='nav-link' to="/editor">nouveau...</Link>
            <Link className='nav-link' to="/thumbnail">Thumbnail</Link>
            <Link className='nav-link' to="/editor/3">edit id:3</Link>
          </Nav>
        </Container>
      </Nvb>
  </div>
);}

export default Navbar;
