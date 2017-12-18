/* IE webpack polyfill */
import 'babel-polyfill'

/* css */
import 'antd/dist/antd.css';
import '@/assets/css/reset.css';
import '@/assets/css/style.css';

import React from 'react';
import { render } from 'react-dom';

/* redux */
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import store from './store/reducer'

import App from 'C/app';


/* render */
render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}