import React, {useEffect, useState} from 'react'

// React code to display a checklist with multiple options that can select and the selected options are dynamically displayed on the screen. 
// React State is used to keep track of checked options and onChange() 
// Event handler is triggered to alter the state whenever an option is checked or unchecked.

const Checklist = () => {


    const fruits = ["apples", "oranges", "pineapples"];
    const veggies = ["carrot", "tomato", "potato"]
    const sweets = ["ice cream", "chocolate", "gelato", "lolipop"]

    const [fruitsSelected, setFruitsSelected] = useState(false);
    const [veggiesSelected, setVeggiesSelected] = useState(false);
    const [sweetsSelected, setSweetsSelected] = useState(false);

    const [selectedItems, setSelectedItems] = useState([]);

    // useEffect(() => {
    //     if (veggiesSelected) {
    //         setSelectedItems([...selectedItems, veggies])
    //     } else {
    //         setSelectedItems(selectedItems.filter((item) => {return veggies.includes(item)}));
    //     }

    //     if (fruitsSelected) {
    //         setSelectedItems([...selectedItems, fruits])
    //     } else {
    //         setSelectedItems(selectedItems.filter((item) => {return fruits.includes(item)}))
    //     };

    //     if (sweetsSelected) {
    //         setSelectedItems([...selectedItems, sweets])
    //     } else {
    //         setSelectedItems(selectedItems.filter((item) => {return sweets.includes(item)}))
    //     }
    // }, [fruitsSelected, sweetsSelected, veggiesSelected])

    const addRemoveValues = (checked, items) => {
        if (checked){
            setSelectedItems([...selectedItems, ...items])
        } else {
            setSelectedItems(selectedItems.filter((item) => {return !items.includes(item)}))
        }
    }

  return (
      <div>
        <div className={"checkList"}>
            <h1>Checklist</h1>
            <input type="checkbox" onChange={(e) => addRemoveValues(e.target.checked, fruits)}/><label>Fruits</label><br/>
            <input type="checkbox" onChange={(e) => addRemoveValues(e.target.checked, veggies)}/><label>Veggies</label><br/>
            <input type="checkbox" onChange={(e) => addRemoveValues(e.target.checked, sweets)}/><label>Sweets</label><br/>
            {/* <input type="checkbox">Veggies</input>
            <input type="checkbox">Sweets</input> */}
        </div>

        <div className={"checkList-output"}>
            {
                selectedItems.map((element, i) => {
                    return <p key={i}>{element}</p>
                })}
        </div>
    </div>
  )
}

export default Checklist


{/* <div className={"checkList-output"}>
            {fruitsSelected && 
                <div>{
                    fruits.map((element, i) => {
                        return <p key={i}>{element}</p>
                    })}
                </div>}
            {veggiesSelected && 
                <div>{
                    veggies.map((element, i) => {
                        return <p key={i}>{element}</p>
                    })}
                </div>}
            {sweetsSelected && 
                <div>{
                    sweets.map((element, i) => {
                        return <p key={i}>{element}</p>
                    })}
                </div>}
        </div> */}