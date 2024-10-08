// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';

import {thunk} from 'redux-thunk'; // Correctly import thunk
import rootReducer from './reducers'; // Ensure your rootReducer combines your reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
