import SC from 'soundcloud';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Callback from './components/Callback';
import Stream from './components/Stream';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Stream} />
            <Route path="/" component={Stream} />
            <Route path="/callback" component={Callback} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Main></Main>, document.getElementById('app'));