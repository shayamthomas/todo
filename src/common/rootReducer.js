import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


import Todo_Reducer from '../components/todoReducer';

const RootReducer = combineReducers({
    TODO_STORE : Todo_Reducer,
    router : routerReducer
})

export default RootReducer;
