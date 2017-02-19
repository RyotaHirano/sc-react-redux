import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

const title = 'My SoundCloud React Redux App';

const tracks = [
  {
    title: 'some track1'
  },
  {
    title: 'some track2'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Stream />
      </Provider>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));