import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StateDataType } from './redux/store';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';





export let renderAll = (state: StateDataType) => {

  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App store={store} />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
renderAll(store.getState())

store.subscribe(() => {
  let state = store.getState()
  renderAll(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
