import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchObjetivoPalanca } from './actions/objetivo_palanca.actions.js';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(fetchObjetivoPalanca());

// export const history = createBrowserHistory({ forceRefresh: true });

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();