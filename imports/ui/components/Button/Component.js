import React from 'react';
import { Button, Col} from 'reactstrap';

const button = ({ onClick, text }) => {
    return <Col xs='8' md='3'>
                <Button  block
                  style={{marginBottom: '15px', backgroundColor: '#807eeb'}}
                  onClick={onClick}
                >{text}</Button>
            </Col>
};

export default button;
