import React from 'react';
import { Row, Form, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Component';
import PasswordInput from '../PasswordInput/Container';

const SignUp = () => {
  return <Form>
          <FormGroup>
            <input className='authorizationInput'
            type='email' placeholder='Email'/>
          </FormGroup>
          <FormGroup>
            <input className='authorizationInput'
            type='text' placeholder='Username'/>
          </FormGroup>
          <PasswordInput text='Password' />
          <PasswordInput text='Confirm password' />
          <Row className='justify-content-center'>
            <Button text='SIGN UP' style={{width: '300px'}} />
          </Row>
        </Form>
};

export default SignUp;
