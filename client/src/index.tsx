import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { store } from './app/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from "./app/global-styles";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
