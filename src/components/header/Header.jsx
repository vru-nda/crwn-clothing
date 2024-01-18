import './header.scss';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CartDropDown from '../cartDropdown/CartDropDown';
import CartIcon from '../cartIcon/CartIcon';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebaseUtils';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {selectCurrentUser} from '../../redux/user/userSelectors';

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
