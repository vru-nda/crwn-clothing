import React from 'react';

import './customButton.scss';

const customButton = ({children, isGoogleSignin, ...otherProps}) => (
  <button
    className={`custom-button ${isGoogleSignin ? 'google-sigin' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default customButton;
