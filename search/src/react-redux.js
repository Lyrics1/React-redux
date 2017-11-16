import React,{Component} from 'react';
import PropTypes from 'prop-types';
export const connect  =(mapStateToProps)=> (WrappedComponent)=>{
	class Connect extends Component{
		static contextTypes= {
			store:PropTypes.object
		}
		//从store 取数据
		constructor(){
			super();
			this.state = {
				allProps:{}
			}
		}

		componentWillMount(){
			const {store} =this.context
			this._updateProps();
			store.subscribe(()=>this._updateProps());


		}
		_updateProps(){
			const {store} = this.context;
			let stateProps = mapStateToProps(store.getState(),this.props)
			this.setState({
				allProps:{
					...stateProps,
					...this.props
				}
			})
		}

		render(){
			const {store} = this.context;
			let stateProps = mapStateToProps(store.getState());
			return <WrappedComponent {...this.state.allProps} />
		}
	}

	return Connect;
}