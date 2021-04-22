import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <AppProvider>
    <App />
    </AppProvider>, 
    document.getElementById('root')
);

reportWebVitals();
