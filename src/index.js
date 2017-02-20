import SC from 'soundcloud';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-redux-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Callback from './components/Callback';
import Stream from './components/Stream';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

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

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Stream}/>
            <Route path="/" component={Stream}/>
            <Route path="/callback" component={Callback}></Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));