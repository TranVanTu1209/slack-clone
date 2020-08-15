import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './context/StateProvider';
import { initialState, reducer } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState} >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
