import { useState } from "react";

const Listing = () => {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
    ];

    // data binding
    const [input, setInput] = useState("");
      
    return (
        <div>
            <h2>Exercise 1</h2>
            <ul>
            {users.map((user) => 
                <li key={user.id}>{user.name}</li>
            )}
            </ul>

            {/* data binding */}
            <input
                type="text"
                placeholder="Enter Text"
                onChange={(e) => setInput(e.target.value)}
            />
            <p>{input}</p>
            <button disabled={input.length < 1}>Submit</button>
        </div>
    )
}

export default Listing;