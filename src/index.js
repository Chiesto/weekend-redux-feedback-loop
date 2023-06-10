import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//different stores for each of the tabs collecting info
const feelingToday = (state = 0, action) =>{
    if(action.type === 'FEELING'){
        return action.payload;
    } else if(action.type === 'RESET'){
        return 0;
    }
    return state;
}
const understandingToday = (state=0, action)=>{
    if(action.type === 'UNDERSTANDING'){
        return action.payload;
    } else if(action.type === 'RESET'){
        return 0;
    }
    return state;
}
const supportToday = (state=0, action)=>{
    if(action.type === 'SUPPORT'){
        return action.payload;
    } else if(action.type === 'RESET'){
        return 0;
    }
    return state;
}
const commentsToday = (state='', action)=>{
    if(action.type === 'COMMENTS'){
        return action.payload;
    } else if(action.type === 'RESET'){
        return '';
    }
    return state;
}


//combining my stores so I can use them in the provider as one thing.
const storeInstance = createStore(
    combineReducers({
        feelingToday,
        understandingToday,
        supportToday,
        commentsToday
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
