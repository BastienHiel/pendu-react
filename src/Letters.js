import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Button } from 'semantic-ui-react'; 


const Letters = ({ Alphabet }) => {
    const list = Alphabet.map((letter, i) => <Button key={i} primary>{letter}</Button>)
return <div>{list}</div>; 
}

export default Letters; 

Letters.propTypes = {
    Alphabet: PropTypes.array.isRequired
}