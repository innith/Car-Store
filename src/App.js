import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes, Route,
  Link
} from "react-router-dom";
 
 import   Models  from './components/Models';
import Contact  from './components/Contact';
 import About from './components/About';
 import Home from './components/Home'; 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
function App() {
  return (

    <BrowserRouter>
    <div className="App">

      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home"><Link to="/" className="navbar-brand">Timeless Wheels</Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/models">Models</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </>
 <div>

  <Routes>
    <Route path='/about' element={<About />} />
    <Route path='/models' element={<Models />}  />
    <Route path='/contact' element={<Contact />}  />
    <Route path='/' element={<Home />}  />
  </Routes>
 </div>

 <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; {new Date().getFullYear()} Timeless Wheels. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="mailto:" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
