import React from 'react'
import ReactDom from 'react-dom'
import  { createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import {counter,add,addAsync,reduce} from './index.redux'


const store = createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
	) )
function render(){
	ReactDom.render(<App  store={store} add={add} addAsync={addAsync} reduce={reduce} />,document.getElementById("root"))
}
render();
store.subscribe(render);