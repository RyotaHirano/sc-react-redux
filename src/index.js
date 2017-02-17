import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const title = 'My SoundCloud React Redux App';

const tracks = [
  {
    title: 'some track1'
  },
  {
    title: 'some track2'
  }
]

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