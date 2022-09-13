// React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user.

import React from 'react'

const Search = () => {

    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
    ];

    const [results, setResults] = React.useState(list);

    const handleSearch = (value) => {
        if (value){
            setResults(list.filter((item) => {return item.toLowerCase().includes(value.toLowerCase())}));

            // or:
            // const filteredValues = list.filter(
            //     (item) =>
            //       item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            // );
        } else {
            setResults(list);
        }
        
    }

    return (
        <div>
            <h1>Search filter</h1>
            <h3>Search: <input onChange={(e) => handleSearch(e.target.value)}></input></h3>

            {results.map((item, i) => {
                return <p key={i}>{item}</p>
            })}
            
        </div>
    )
}

export default Search