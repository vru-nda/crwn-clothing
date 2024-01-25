import './directory.scss';

import React, {useContext} from 'react';

import MenuItem from '../menuItem/MenuItem';

import DirectoryContext from '../../context/directory/directoryContext';

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <div className='dir-menu'>
      {sections.map(({id, ...sectionProps}) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
