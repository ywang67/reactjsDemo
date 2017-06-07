//REACT
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';

import reducers from './reducers/index';

import PizzaHome from './components/pages/pizzaHome';



const middleware = applyMiddleware(logger,promise);
const store = createStore(reducers,middleware);

const Routes = (
    <Provider store={store}>

        <PizzaHome />

    </Provider>
);

ReactDOM.render(

    Routes, document.querySelector('.container')
);


