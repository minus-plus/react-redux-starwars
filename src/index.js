import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import NotFound from './components/NotFound';
import Filmlist from './containers/FilmlistContainers';
import FilmDetais from './containers/FilmDetailsContainer';

const middleWare = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleWare);

const Routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Filmlist}/>
                <Route path="film-details/:id" component={FilmDetais} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>
);
ReactDOM.render(
    Routes,
    document.getElementById('app')
);