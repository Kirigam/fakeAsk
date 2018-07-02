import React from 'react';
import { Container, Navbar, NavbarBrand, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../fonts/fonts.css';
import Search from '../Search/Container';


const Header = () => {
    return <Navbar style={{backgroundColor: '#807eeb'}}>
                <Container className='justify-content-between'>
                    <NavLink to='/' activeStyle={{
                        color: '#fff',
                        textDecoration: 'none'
                    }} style={{
                        color: '#fff',
                        fontFamily: 'NautilusPompiliusRegular'
                    }} className='navbar-brand'  >fakeAsk</NavLink>

                    {(document.location.pathname === '/') ? <Search />: true }
                </Container>
            </Navbar>
};

export default Header;