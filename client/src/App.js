import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';

import { Provider } from 'react-redux';
import store from './reducers';

import Login from './components/auth/Login';
import BubblePage from './components/BubblePage';
import './styles.scss';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='App'>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/bubbles' component={BubblePage} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
