import React from 'react';

import './customButton.scss';

const customButton = ({children, isGoogleSignin, inverted, ...otherProps}) => (
  <button
    className={`custom-button ${inverted ? 'inverted' : ''} ${
      isGoogleSignin ? 'google-sigin' : ''
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default customButton;
