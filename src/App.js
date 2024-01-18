import './App.css';

import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthPage from './pages/authPage/AuthPage';
import CheckoutPage from './pages/checkout/Checkout';
import Header from './components/header/Header';

import {auth, createUserProfileDocument} from './firebase/firebaseUtils';

import {setCurrentUser} from './redux/user/userActions';
import {selectCurrentUser} from './redux/user/userSelectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  // Check for signed in user with google account
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // check if the db updated
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
