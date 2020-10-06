import React from 'react'; 
import PropTypes from 'prop-types'; 

import './Riddle.sass';


const Riddle = ({ phrase }) => {
    return (
        <div>        
            <p className='riddle'>{phrase}</p>
        </div>
    ); 
}

export default Riddle; 

Riddle.propTypes = {
}