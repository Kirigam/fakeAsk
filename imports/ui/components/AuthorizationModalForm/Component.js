import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row,
         TabContent, TabPane,
         Nav, NavLink, Modal, ModalHeader, ModalBody } from 'reactstrap';
import SignIn from '../SignIn/Component';
import SignUp from '../SignUp/Component';

let siginInTabIsActive = false;

const RegistarationForm = ({activeModal, openModal, activeTab, toggleTab }) => {
  const colorTab1 = (activeTab === 'signUp') ? '#807eeb' : '#26292D';
  const colorTab2 = (activeTab === 'signIn') ? '#807eeb' : '#26292D';

  return <React.Fragment>
    <FontAwesomeIcon icon={faSignInAlt} onClick={openModal}
                     style={{ cursor: 'pointer' }} />
                     
    <Modal isOpen={activeModal} toggle={openModal}>
          <ModalHeader className='justify-content-around'>
            <Nav>
              <NavLink
                style={{ cursor: 'pointer', color: colorTab1 }}
                onClick={ () => toggleTab('signUp') }
              >Sign up</NavLink>
              <NavLink
                style={{ cursor: 'pointer',color: colorTab2 }}
                onClick={ () => toggleTab('signIn') }
              >Sign In</NavLink>
            </Nav>
          </ModalHeader>
          <ModalBody>
            {(activeTab === 'signIn') ? <SignIn /> : <SignUp />}
          </ModalBody>
        </Modal>
  </React.Fragment>

};

export default RegistarationForm;
