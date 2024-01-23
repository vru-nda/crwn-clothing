import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CartDropDown from '../cartDropdown/CartDropDown';
import CartIcon from '../cartIcon/CartIcon';

import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {signOutStart} from '../../redux/user/userActions';
import {selectCurrentUser} from '../../redux/user/userSelectors';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP </OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
