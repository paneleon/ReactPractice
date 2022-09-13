// Suppose, we have a component, which contains a state variable (declared using the useState React hook) 
// that tracks the value for the counter. The value is also displayed in this component, 
// but the button that increments the value is present in the child component of this component. 

import { useState } from "react";

const ChildCounter = (props) => {

    return (
        <div style={{backgroundColor: "yellow"}}>
        <button onClick={() => props.updateCount()}>Click</button>
        </div>
    )
}

const Counter1 = () => {

    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>First way</h1>
            <h4>Counter: {count}</h4>
            <ChildCounter count={count} updateCount={updateCount}/>
        </>
    )
}

export default Counter1;