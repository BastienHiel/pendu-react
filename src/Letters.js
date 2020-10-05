import React from 'react'; 
import PropTypes from 'prop-types'; 

import Letter from './Letter'; 
import './Letters.sass'; 

const Letters = ({ alphabet, onClick }) => {
    const letterList = alphabet.map((letter, i) => <Letter value={letter} onClick={onClick} key={i} />)
    return (
        <div className='letters'>        
            {letterList}
        </div>
    ); 
}

export default Letters; 

Letters.propTypes = {
    alphabet: PropTypes.array.isRequired, 
    onClick: PropTypes.func.isRequired
}