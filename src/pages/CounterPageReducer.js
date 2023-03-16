import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const INCREMENT_COUNTER = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNTER = 'decrement';
const ADD_VALUE_TO_COUNTER = 'add-value';

function reducer(state, action) {
    switch (action.type) {
        case INCREMENT_COUNTER: 
            return {
                ...state,
                counter: state.counter + 1,
            };
        
        case SET_VALUE_TO_ADD: 
            return {
                ...state,
                valueToAdd: action.payload,
            };
        
        case DECREMENT_COUNTER: 
            return {
                ...state,
                counter: state.counter - 1,
            };
        
        case ADD_VALUE_TO_COUNTER: 
            return {
                ...state,
                counter: state.counter + state.valueToAdd,
                valueToAdd: 0,
            };
        

        default: 
            return state;
        
    }
    
}

function CounterPageReducer({initialCount}) {

    const [state, dispatch] = useReducer(reducer, 
        {
            counter: initialCount,
            valueToAdd: 0,
        }
    );
    

    const handleIncrement = () => {
        dispatch({
            type: INCREMENT_COUNTER,
        });
    };

    const handleDecrement = () => {
        dispatch({
            type: DECREMENT_COUNTER,
        });
    };

    const handleChange = (e) => {
        const value = Number(e.target.value);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNTER,
        });
        console.log('submit');
    }

    return (
        <Panel>
            <h1>Counter is: {state.counter}</h1>
            <div className='flex flex-row gap-1'>
               <Button onClick={handleIncrement}>Increment</Button>
               <Button onClick={handleDecrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
               <div className='m-2 flex flex-col w-min gap-2'>
                   <label>A lot to Add</label>
                   <input className='bg-gray-50 p-2 border border-gray-300' type="number" onChange={handleChange} value={state.valueToAdd || ''}></input>
                   <Button>Add it!</Button>    
               </div>
            </form>
            
            
        </Panel>
    );
}

export default CounterPageReducer;