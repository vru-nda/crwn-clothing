import './App.css';

import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import Header from './components/header/Header';
import AuthPage from './pages/authPage/AuthPage';
import CheckoutPage from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';

import {selectCurrentUser} from './redux/user/userSelectors';
import {checkUserSession} from './redux/user/userActions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  // Check for signed in user with google account
  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  // close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
