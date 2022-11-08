import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Flat from './Flat';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // ничего не напонимает такая конструкция?) React Context
  <Provider store={store}>
    <Flat />
  </Provider>
);
