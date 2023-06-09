import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const feelingToday = (state = 0, action) =>{
    if(action.type === 'FEELING'){
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingToday
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
