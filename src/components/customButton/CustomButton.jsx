import React from 'react';

import './customButton.scss';

const customButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default customButton;
