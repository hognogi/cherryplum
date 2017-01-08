import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


var IndexPage = require('./pages/index.js');


import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import {initialTabIndex, tabIndexReducer} from './reducers/tabIndex';


let reducer = combineReducers({ 
	tabIndex:tabIndexReducer,
	routing: routerReducer 
});

let initialGlobalState =  { 
	tabIndex : initialTabIndex
};

 
let store = createStore(reducer,initialGlobalState);

const history = syncHistoryWithStore(browserHistory, store); 




render(<Provider store={store}>
	<Router history={history}>
		<Route path="*" component={IndexPage} />
	</Router>
</Provider>, document.getElementById('react-app'));


