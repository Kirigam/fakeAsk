import React from 'react';
import { Row, Form, FormGroup } from 'reactstrap';
import Button from '../Button/Component';
import PasswordInput from '../PasswordInput/Container';

const SignIn = () => {
  return <Row className='justify-content-center'>
          <Form>
            <FormGroup>
              <input className='authorizationInput'
              type='email' placeholder='Email'/>
            </FormGroup>
            <PasswordInput text='Password' />
            <FormGroup>
              <a href='#' className='btn btn-link'>Forget password ?</a>
            </FormGroup>
            <Row className='justify-content-center'>
              <Button text='SIGN IN' style={{width: '300px'}} />
            </Row>
          </Form>
        </Row>
};

export default SignIn;
