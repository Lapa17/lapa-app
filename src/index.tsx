import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

// const tagManagerArgs = {
//   gtmId: 'GTM-WF95T4J'
// }
// TagManager.initialize(tagManagerArgs)

const TRACKING_ID = "UA-156420292-2";
ReactGA.initialize(TRACKING_ID);



  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
//@ts-ignore
window.store = store



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
