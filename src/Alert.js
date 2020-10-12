import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Message } from 'semantic-ui-react'; 
//import './Alert.sass';


const Alert = ({ won }) => {
    return (
        <Message positive={won} negative={!won}>
            <Message.Header>Vous avez {won ? 'gagné' : 'perdu'} !</Message.Header>
        </Message>
    ); 
}

export default Alert; 

Alert.propTypes = {
}