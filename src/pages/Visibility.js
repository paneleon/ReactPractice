import { useState } from "react";

const Visibility = () => {

    const [visible, setVisible] = useState(true);
    const changeVisibility = () => {
        if (visible){
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

    // or 
    const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => {changeVisibility()}}>{visible ? "Hide" : "Show"} Element Below</button>
      <div>{visible && "Toggle Challenge"}</div>

      <h3>OR</h3>
    
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>

      {show && <div>Toggle Challenge</div>}
    </>
  );
}

export default Visibility;