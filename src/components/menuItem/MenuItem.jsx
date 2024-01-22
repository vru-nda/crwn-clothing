import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  SubtitleContainer,
  TitleContainer,
} from './menuItem.styles';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageurl={imageUrl}
      ></BackgroundImageContainer>
      <ContentContainer className='content'>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
