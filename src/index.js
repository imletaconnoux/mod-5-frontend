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
import { fetchVideos } from './actions/youtube'
import { fetchCollections } from './actions/collections'
import videosReducer from './reducers/videosReducer'
import usersReducer from './reducers/usersReducer'
import collectionsReducer from './reducers/collectionsReducer'

const rootReducer = combineReducers({videos: videosReducer, users: usersReducer, collections: collectionsReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
