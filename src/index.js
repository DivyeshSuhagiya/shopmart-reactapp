import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux';
import store from './redux/stores/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>

        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>
);

reportWebVitals();
