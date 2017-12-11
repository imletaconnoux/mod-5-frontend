import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import youtubeReducer from './reducers/youtubeReducer'
import usersReducer from './reducers/usersReducer'
import collectionsReducer from './reducers/collectionsReducer'
import followingsReducer from './reducers/followingsReducer'
import commentsReducer from './reducers/commentsReducer'
import topicsReducer from './reducers/topicsReducer'

const rootReducer = combineReducers({youtube: youtubeReducer, user: usersReducer, collections: collectionsReducer, following: followingsReducer, comments: commentsReducer, topics: topicsReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
