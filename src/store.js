import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storiesReducer from './reducers/stories';

export default createStore(
    storiesReducer,
    applyMiddleware(thunk)
);