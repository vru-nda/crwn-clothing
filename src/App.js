import './App.css';

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import AuthPage from './pages/authPage/AuthPage';

import {auth} from './firebase/firebaseUtils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // Last signed in user with google account with persistence (Subscription)
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
