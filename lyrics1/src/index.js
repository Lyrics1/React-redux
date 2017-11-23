import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counter from './reducers';
import Counter from './components/Counter'

import './index.css';

const store = createStore(counter);
const Root = document.getElementById('root');

const render = () =>ReactDOM.render(
	<Counter 
			value = {store.getState()}
			onIncrement = {() => store.dispatch({type:"INCREMENT"})}
			onDecrement = {()=> store.dispatch({type:"DECREMENT"})}
	 />,
	 Root
	)

render();
store.subscribe(render);