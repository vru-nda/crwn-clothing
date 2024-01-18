import './directory.scss';

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menuItem/MenuItem';

import { selectDirectorySections } from '../../redux/directory/directorySelector';

const Directory = ({sections}) => (
  <div className='dir-menu'>
    {sections.map(({id, ...sectionProps}) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
