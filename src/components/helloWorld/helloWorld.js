import React from 'react';
import PropTypes from 'prop-types';

/** Super lame component */
function HelloWorld({message}) {
    return <div> Hello {message}</div>
}

HelloWorld.defaultProps = {
    message: 'World',
};

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string,
};

export default HelloWorld;
