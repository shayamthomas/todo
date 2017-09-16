import React from 'react';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import RootReducer from './common/rootReducer';

import App from './App';

const history = createHistory()
const middleware = applyMiddleware(thunkMiddleware, routerMiddleware(history));
const store = createStore(RootReducer, compose(middleware));


const Routing = () => {
    return(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    );
}

export default Routing;
