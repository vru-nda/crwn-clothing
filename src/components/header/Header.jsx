import './header.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import CartIcon from '../cartIcon/CartIcon';
import CartDropDown from '../cartDropdown/CartDropDown';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {toggleCartHidden} from '../../redux/cart/cartActions';
import {auth} from '../../firebase/firebaseUtils';

const Header = ({currentUser, hidden}) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP{' '}
        </Link>
        <Link className='option' to='/shop'>
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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
