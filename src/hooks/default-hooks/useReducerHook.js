import { useReducer } from "react";

export function UseReducerHook() {
    const [counter, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>useReducerHook</div>
            <button onClick={()=>dispatch('decrement')}>-</button>
            <span>{counter.count}</span>
            <button onClick={()=>dispatch('increment')}>+</button>
        </div>
    )
}

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return {
                count:state.count+1
            }
        case 'decrement':
            return {
                count:state.count-1
            }
        default:
            return state;
    }
}

