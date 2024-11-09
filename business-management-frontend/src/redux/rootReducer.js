// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import clientsReducer from './clientsSlice';
import projectsReducer from './projectsSlice';

const rootReducer = combineReducers({
    clients: clientsReducer,
    projects: projectsReducer,
});

export default rootReducer;
