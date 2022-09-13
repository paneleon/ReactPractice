// Add and Delete Items From the List 
// In this challenge, the developer has to create an input field with a button.
// When the button is clicked, the text in the input field should be added below in a list. Moreover, whenever any list item is clicked, it should be removed from the list.


import React, {useState} from 'react';

const ListItems = () => {

    const [text, setText] = useState("");
    const [items, setItems] = useState(["hello", "hi"]);

    const addItem = () => {
        if (text){
            setItems([...items, text]);
            setText("");
        }
        
    }

    const removeItem = (value) => {
        setItems(items.filter((item) => {
            return value != item
        }));
    }

    return (
        <div>
            <h1>ListItems</h1>
            <input
                placeholder='Enter here'
                onChange={(e) => {setText(e.target.value)}}
                value={text}
            ></input>

            <button onClick={addItem}>Click me</button>

            <ul>
                {items.map((item, i) => {
                    return <li key={i} onClick={() => removeItem(item)}>{item}</li>
                }
                )}
            </ul>
        </div>
    )
}

export default ListItems