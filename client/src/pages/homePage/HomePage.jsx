import React, {Profiler} from 'react';

import Directory from '../../components/directory/Directory';

import {HomePageContainer} from './homePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => {
          console.log('HERE', {id, phase, actualDuration});
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
