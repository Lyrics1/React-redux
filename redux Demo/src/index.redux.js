// reducer

const ADD = 'A';
const REDUCE = "B";
export  function counter(state = 0,action){
	switch(action.type){
		case ADD:
		 	return state+1
		case REDUCE:
		 	return state-1
		default :
			return 10;
	}
}

export function add (){
	return {type:ADD}
}

export function reduce (){
	return {type:REDUCE}
}

export function addAsync(){
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(add())
		},2000)
	}
}