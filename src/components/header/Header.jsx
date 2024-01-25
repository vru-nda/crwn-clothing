import './header.scss';

import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';

import CartDropDown from '../cartDropdown/CartDropDown';
import CartIcon from '../cartIcon/CartIcon';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebaseUtils';

import CurrentUserContext from '../../context/currentUser/currentUserContext';
import {CartContext} from '../../providers/cart/cartProvider';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const {hidden} = useContext(CartContext);

  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP{' '}
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  );
};

export default Header;
