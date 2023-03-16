import Button from '../components/Button';
import { useState } from 'react';
import Panel from '../components/Panel';

function CounterPage({initialCount}) {

    const [counter, setCounter] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const handleChange = (e) => {
        const value = Number(e.target.value);
        setValueToAdd(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter + valueToAdd);
        setValueToAdd(0);
        console.log('submit');
    }

    return (
        <Panel>
            <h1>Counter is: {counter}</h1>
            <div className='flex flex-row gap-1'>
               <Button onClick={handleIncrement}>Increment</Button>
               <Button onClick={handleDecrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
               <div className='m-2 flex flex-col w-min gap-2'>
                   <label>A lot to Add</label>
                   <input className='bg-gray-50 p-2 border border-gray-300' type="number" onChange={handleChange} value={valueToAdd || ''}></input>
                   <Button>Add it!</Button>    
               </div>
            </form>
            
            
        </Panel>
    );
}

export default CounterPage;