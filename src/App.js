import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
