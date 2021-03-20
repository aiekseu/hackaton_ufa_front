import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './components/redux/configureStore';

const history = createBrowserHistory();

ReactDOM.render (
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>
        
    </React.StrictMode>,
    document.getElementById('root')
);



