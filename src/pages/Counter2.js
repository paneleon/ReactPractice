// Suppose, we have a component, which contains a state variable (declared using the useState React hook) 
// that tracks the value for the counter. The value is also displayed in this component, 
// but the button that increments the value is present in the child component of this component. 

// USING CONTEXT

import { useContext, useState } from "react";

import CountContext from "../context/CountContext";

const Child = () => {

    const context = useContext(CountContext);
    const {countHandler} = context;

    return (
        <>
            <button onClick={countHandler}>Click me!</button>
        </>
    )
}


const Counter2 = () => {

    const [count, setCount] = useState(0);

    const countHandler = () => {
        setCount(count + 1);
    };

    return (
        <CountContext.Provider value={{count, countHandler}}>
            <h1>Second way: </h1>
            <Child/>
            <h3>Count: {count}</h3>
        </CountContext.Provider>
    )
}

export default Counter2;

// Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
// The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. 
// One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.