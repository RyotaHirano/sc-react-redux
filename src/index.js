import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import configreStore from './store/configureStore';
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

const store = configreStore();
store.dispatch(actions.setStore(tracks));

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {title}
        <Stream tracks={tracks}/>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));