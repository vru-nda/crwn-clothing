import './App.css';

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Header from './components/header/Header';
import AuthPage from './pages/authPage/AuthPage';
import CheckoutPage from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';

import {auth, createUserProfileDocument} from './firebase/firebaseUtils';

import CurrentUserContext from './context/currentUser/currentUserContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // Check for signed in user with google account
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // check if the db updated
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({currentUser: null});
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
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.state.currentUser ? <Redirect to='/' /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
