import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directorySelector';
import MenuItem from '../menuItem/MenuItem';
import {DirectoryContainer} from './directory.styles';

const Directory = ({sections}) => (
  <DirectoryContainer>
    {sections.map(({id, ...sectionProps}) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
