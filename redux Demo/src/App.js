import  React from 'react';


class App extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		const store = this.props.store;
		const num = store.getState();
		const add = this.props.add;
		const reduce = this.props.reduce;
		const addAsync = this.props.addAsync;
		return (
				<div>
					<h1>jhh{num}</h1>
					<button onClick={()=>store.dispatch(add())}>ADD</button>
					<button onClick={()=>store.dispatch(reduce())}>reduce</button>
					<button onClick={()=>store.dispatch(addAsync())}>reduce</button>
				</div>
			)
	}
}


export default App;