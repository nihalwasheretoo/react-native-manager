import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from './common';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import LoginForm from './LoginForm';
import Router from './Router';

const App = () => {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
};

export default App;
