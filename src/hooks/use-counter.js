import { useState, useEffect } from "react";

function useCounter(initialCount) {
    const [counter, setCounter] = useState(initialCount);

     useEffect(() => {
         console.log(counter);
     }, [counter]);


    const increment = () => {
        setCounter(counter + 1);
    }

    return {
        counter,
        increment,
    };
}

export default useCounter;