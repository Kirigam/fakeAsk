import React from 'react';
import { FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const I = styled.i`
  position: absolute;
  left: 380px;
  top: 20px;
  cursor: pointer;
  color: #999;

  :active {
    color: rgb(128, 126, 235);
  }
`;

const PasswordInput = ({ text, password, isPasswordVisible, onChangePassword,
                         onClickPasswordVisible  }) => {

  const passwordType = (isPasswordVisible) ? 'text' : 'password';

  return <FormGroup>
          <input type={passwordType} placeholder={text} value={password}
            className='authorizationInput'
            onChange={ (e) => onChangePassword(e.target.value) } />
          <I>
            <FontAwesomeIcon icon={faEye} onClick={(e) => {
              e.target.classList.toggle('active');
              return onClickPasswordVisible();
            }}/>
          </I>
        </FormGroup>
};

export default PasswordInput;
