import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

import { saveState } from './localStorage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react'
// import storage from 'redux-persist/lib/storage';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import rootReducer from './rooterReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// const persistConfig = {
//     key: 'root',
//     storage,
//     stateReconciler: hardSet
// }
   
// const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(rootReducer, applyMiddleware(
    thunk, 
    logger, 
));

// saves state to localstorage to persist data inbetween reloads
store.subscribe(() => {
    saveState(store.getState());
});

// const persistor = persistStore(store)

// get auth header from localstorage and put it in axios headers
const AUTH_TOKEN = localStorage.getItem('jwt')
if (AUTH_TOKEN) {
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
}

ReactDOM.render(
<Provider store = {store} >
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
    {/* </PersistGate> */}
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
