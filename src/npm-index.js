import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store';

function Payment(){
    return (
    <Provider store={store}>
      <App />
    </Provider>
    );
}

export default Payment;
