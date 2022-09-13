import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Requests = () => {

    

    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const [counter, setCounter] = useState(1);
    const url = `https://jsonplaceholder.typicode.com/users/${counter}`;

    const requestFetch = async () => {
        try {
            setCounter(counter + 1);
            const response = await fetch(url);
            const responseData = await response.json();  // doesn't have data property and returns a promise
            console.log("reponse fetch ", response);
            console.log("fetch data ", responseData);
            setData(responseData);
        } catch (error) {
            setError(error?.message ? error.message : error)
        }
    }

    const requestAxios = async () => {
        setCounter(counter + 1);
        try {
            const response = await axios.get(url);
            console.log("reponse axios ", response);
            setData(response.data);
        } catch (error) {
            setError(error?.message ? error.message : error)
        }
    }

    useEffect(() => {
        requestFetch();
    }, [])

    useEffect(() => {
        if (counter === 11){
            setCounter(1);
        };
    }, [counter])

    return (
        <div>
            <h1>Data</h1>
            <p>{data?.name}</p>
            <p>{data?.username}</p>
            <p>{data?.email}</p>
            <p>{data?.phone}</p>
            <p>{data?.website}</p>

            <button onClick={() => requestAxios()}>New Data</button>

            {error && <p>{error}</p>}
        </div>
    )
}

export default Requests