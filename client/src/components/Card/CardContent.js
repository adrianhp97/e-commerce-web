import React from 'react';
import PropTypes from 'prop-types';

const CardContent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  children: PropTypes.element,
};


export default CardContent;
