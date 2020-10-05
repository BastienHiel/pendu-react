import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Button } from 'semantic-ui-react'; 

const Letter = ({ value, onClick }) => <Button primary onClick={onClick}>{value}</Button>

export default Letter; 

Letter.propTypes = {
    value: PropTypes.string.isRequired
}