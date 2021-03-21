import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/layouts/App';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
document.querySelector('.app'));