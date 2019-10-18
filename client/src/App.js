import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './reducers';

import Login from './components/Login';
import './styles.scss';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='App'>
          <Route exact path='/' component={Login} />
          {/*
          Build a PrivateRoute component that will
          display BubblePage when you're authenticated
        */}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
