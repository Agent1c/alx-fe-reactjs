import {useState} from "react";

//Counter function
const Counter = () =>{
    const [count, setCount] = useState(0);
    
    //increment count
    // const increment = () =>{
    //     setCount(count + 1);
    // }

    //     //decrement count
    // const decrement = () =>{
    //     setCount(count - 1);
    // }

    // //reset count
    // const reset = () =>{
    //     setCount(0);
    // }
    
    return(
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter; 