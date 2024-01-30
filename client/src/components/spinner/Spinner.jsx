import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './SpinnerStyles';

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
