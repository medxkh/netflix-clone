import React, {useState,useEffect} from 'react'
import axios from './axios'
import requests from './requests'

function Row({title,fetchUrl}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Row
