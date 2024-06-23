import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TemporaryDrawer from './drawer';

///////////////////////////////////////////////
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
///////////////////////////////////////////////

function Navigationbar() {
    return (
      <>
      <div className='banner'>
      <Navbar  data-bs-theme="dark" id='navbar' className='navbar container'>
        <Container className='container nav_container' >
          <div className='nav_brand_container'>
          <Link to='/'  className='brand'>GO <strong>FOOD</strong></Link>
          </div>
          <div className='nav_menu_container responsive'>
          <Nav className="me-auto nav_menu_container ">
            <Link to='/' style={{fontSize:'20px',fontWeight:'bold'}} className='link'>Home </Link>
            <Link to="/" style={{fontSize:'20px',fontWeight:'bold'}} className='link'>Groceries </Link>
            <Link to="/" style={{fontSize:'20px',fontWeight:'bold'}} className='link'>Pages </Link>
          
          </Nav>
          </div>
        </Container>
        <Container id='navbar_container' className='container' >
          <div className='responsive' >
          <Nav className="me-auto nav_menu_container ">
          <Link to="/" style={{fontSize:'20px',fontWeight:'bold',color:'#fff'}} className='connect_link' >Connect with us →</Link>
          <Link to='/contact' style={{fontSize:'20px',fontWeight:'bold',color:'#fff'}} className='connect_link icons' >📩</Link>
            <Link to='/' style={{fontSize:'20px',fontWeight:'bold',color:'#fff'}} className='connect_link icons' >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" style={{fill:'#fff'}}>
<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
</svg>
            </Link>
            <Link to="/" style={{fontSize:'20px',fontWeight:'bold',color:'#fff'}} className='connect_link icons' >❤️</Link>
          </Nav>
          </div>
          <div className='drawer'>
        <TemporaryDrawer/>

      </div>
        </Container>
      </Navbar>
     
   
      <div className='banner_card_container container'>

      <Card style={{ width: '40rem' }} className='banner_card'>
      <Card.Body>
        <h3>Discount upto 20%</h3>
        <Card.Title><h1> Buy Fresh and Organic Fresh Food </h1></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='banner_card_info_block'>
        <Link to='/shop' variant="success" className='shop_now'>Shop Now→</Link>
        <div className='banner_card_info'> 
        <span className='banner_card_info_span'>35K+</span>
        users
        </div>
        <div className='banner_card_info'> 
        <span className='banner_card_info_span'>18K+</span>
        Products
        </div>
        </div>
      </Card.Body>
    </Card>
    </div>



      </div>
       
       
      </>
    );
}

export default Navigationbar;