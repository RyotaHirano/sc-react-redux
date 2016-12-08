import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../stores/configureStore';
import * as actions from '../actions';
import Stream from '../components/Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDom.render(
  <Provider store={store}>
    <Stream />
  </Provider>
  ,
  document.getElementById('app')
);
