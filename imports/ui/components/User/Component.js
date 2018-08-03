import React from 'react';
import { Col, Row, 
         TabContent, TabPane, 
         Nav, NavItem, NavLink, 
         Modal, ModalHeader, ModalBody } from 'reactstrap';
import classnames from 'classnames';
//import avatar from '../../../../public/images/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import GoogleMaps from '../GoogleMaps/Container';
import styled from 'styled-components';

const I = styled.i`
    cursor: pointer;
    color: #9F9F9F;
    :hover {
        color: #807eeb;
    }
`;

const UserInfo = ({user, toggleTab, activeTab, toggleModal, activeModal}) => {
    const userLocation = {
        lat: +user.address.geo.lat, 
        lng: +user.address.geo.lng
    };
    return <Row className='justify-content-center mt-3'>
            <Col md='6' xl='4'> 
                <img src='/images/user.jpg' alt='avatar' 
                className='img-thumbnail rounded mx-auto d-block' /> 
            </Col>
            <Col md='6'>
                <p><b>Name:</b> {user.name}</p>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Website:</b> {user.website}</p>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '1'})} 
                            onClick={() => toggleTab('1')} style={{cursor: 'pointer'}}>
                            Company
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '2'})} 
                            onClick={() => toggleTab('2')} style={{cursor: 'pointer'}}>
                            Address
                        </NavLink>
                    </NavItem>    
                </Nav>
                <TabContent activeTab={activeTab} className='mt-2'>
                    <TabPane tabId="1">
                        <p><b>Name:</b> {user.company.name}</p>
                        <p><b>Catch phrase:</b> {user.company.catchPhrase}</p>
                        <p><b>Bs:</b> {user.company.bs}</p>
                    </TabPane>
                    <TabPane tabId="2">
                        <p><b>Street:</b> {user.address.street}</p>
                        <p><b>Suite:</b> {user.address.suite}</p>
                        <p><b>City:</b> {user.address.city}</p>
                        <p><b>Zipcode:</b> {user.address.zipcode}</p>
                        <p><b>Show on map:</b> <I className='ml-2'>
                            <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faMap} 
                            onClick={toggleModal}/></I></p>
                        
                        <Modal isOpen={activeModal} toggle={toggleModal}>
                            <ModalHeader toggle={toggleModal}>Location {user.username}</ModalHeader>
                            
                            <ModalBody><GoogleMaps markerPosition={userLocation} isMarkerShown={true}/>
                            </ModalBody>
                            
                        </Modal>
                    </TabPane>
                </TabContent>
            </Col>
            </Row>
}

export default UserInfo;