import React, {useEffect, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {checkUserSession} from './redux/user/userActions';
import {selectCurrentUser} from './redux/user/userSelectors';

import {GlobalStyle} from './globalStyles';

import Spinner from './components/spinner/Spinner';
import Header from './components/header/Header';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

const AuthPage = lazy(() => import('./pages/authPage/AuthPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/Checkout'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));

const App = ({checkUserSession, currentUser}) => {
  // Check for signed in user with google account
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <AuthPage />)}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
