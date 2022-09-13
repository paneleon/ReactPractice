import { useState } from "react";

// Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. 
// Feel free to use any string to update the parent's current string.

const Child = ({updateText}) => {
    return (<>
    <div style={{
        width: "50%",
        border: "2px solid rgba(0, 0, 0, 0.05)"
        }}>
        <h4>Child</h4>

        <button onClick={() => {updateText("Something new here")}}>Update Text</button>
    </div>
    </>)
  }
  
const PropsUpdateParent = () => {

    const [text, setText] = useState("Not much here")
    
    return (<>
    <div>
        <h2>Parent</h2>
        <h5 style={{color: "blue"}}>{text}</h5>
        <Child updateText={setText}/>

    </div>
    </>)
}

export default PropsUpdateParent;