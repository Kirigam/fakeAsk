import React from 'react';
import { Row, Col, Form, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Component';
import PasswordInput from '../PasswordInput/Container';

const onS = (e) => {
  e.preventDefault();
  const form = e.target;

  const formData = Object.values(form).reduce((acc, current) => {
    const key = current.name;

    if(key) {
      return {
        ...acc,
        [key]: current.value
      };
    }

    return acc;
  }, {});

  for(key in formData) {
    form[key].style.borderColor = '#ccc';

    const errMessage = form[key].parentNode.firstElementChild;
    if(formData[key] === '' ) {
      form[key].style.borderColor = 'rgb(280, 0, 90)';
      errMessage.firstElementChild.textContent = `Input ${key}`;
      errMessage.hidden = false;
    }
    else if(formData['password'] !== formData['confirm password']) {
      if(form[key].name === 'confirm password' && formData[key] !== '' ) {
        form[key].style.borderColor = 'rgb(280, 0, 90)';
        errMessage.firstElementChild.textContent = 'Passwords didn\'t match';
        errMessage.hidden = false;
      } else {
        errMessage.hidden = 'true';
      }
    } else {
      errMessage.hidden = 'true';
    }
  }

  return console.log(formData);
};

const SignUp = () => {
  return <Row className='justify-content-center'>
            <Form onSubmit={onS}>
                <FormGroup>
                  <Row className='inputError justify-content-center' hidden={true}>
                    <p></p>
                  </Row>
                  <input className='authorizationInput' name='email'
                  type='email' placeholder='Email'/>
                </FormGroup>
                <FormGroup>
                  <Row className='inputError justify-content-center' hidden={true}>
                    <p></p>
                  </Row>
                  <input className='authorizationInput' name='username'
                  type='text' placeholder='Username'/>
                </FormGroup>
                <PasswordInput text='Password' name='password' />
                <PasswordInput text='Confirm password' name='confirm password' />
                <Row className='justify-content-center'>
                  <Button type='submit' text='SIGN UP' style={{width: '300px'}} />
                </Row>
              </Form>
            </Row>
};

export default SignUp;
