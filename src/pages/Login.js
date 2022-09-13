// React code for simple login form where the user login by entering their username and password. 
// The form inputs are validated to check if correct information is entered and the error messages are the validation fails. 
// The login form is hidden and the “Welcome, ${name}” message is shown when the user login is successful.

import React, {useState} from 'react'

const Login = () => {

    const usersData = {
        "doctor1": "123",
        "pirate2": "123",
        "rapper134": "123"
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const checkUser = () => {
        if (!username){
            setError("Please provide your username");
        } else if (!password){
            setError("Please provide your password");
        } else {
            setError("");

            if (usersData[username] === password){
                setError("");
                setSuccess(true);
            } else {
                setError("This user does not exist");
            }
        }
    }

    return (
    <div className={"login-form"}>
        <h1>Login</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" onClick={() => checkUser()}>Submit</button>
            {error && <p className="error">{error}</p>}

            {success && <h3>Welcome, {username}!</h3>}
    </div>
  )
}

export default Login