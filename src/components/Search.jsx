import axios from 'axios';
import React, { useState } from 'react';

const Search = ({setLocation}) => {

    const [idLocation, setIdLocation] = useState("")

    console.log(idLocation)

    const searchId = () => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
            .then(res => setLocation(res.data))
            
    }

    return (
        <div className='search'>
            <input type="text"
            placeholder="Enter the ID of the location: 1 - 126" 
            value = {idLocation} 
            onChange = {e => setIdLocation(e.target.value)}/>
            <button onClick = {searchId}>Search</button>
        </div>
    );
};

export default Search;