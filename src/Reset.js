import React from 'react'; 
import PropTypes from 'prop-types'; 

//import './Riddle.sass';
import { Button } from 'semantic-ui-react';


const Reset = ({ onClick }) => {
    return (
        <div>        
            <Button secondary onClick={onClick}>Rejouer</Button>
        </div>
    ); 
}

export default Reset; 

Reset.propTypes = {
}