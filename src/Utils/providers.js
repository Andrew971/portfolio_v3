import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import {Route} from 'react-router-dom';
import RootContainer from '../App';
import store from './reduxStore'
// import { render } from 'react-snapshot';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";


export default  (element) => {

  if (element.hasChildNodes()) {
    hydrate(
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <Router>
            <Route path="/" component={RootContainer}/>
          </Router>
        </PersistGate>
      </Provider>
    , element);
  } else {
    render(
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <Router>
            <Route path="/" component={RootContainer}/>
          </Router>
        </PersistGate>
      </Provider>
      , element
    );
  }

};
