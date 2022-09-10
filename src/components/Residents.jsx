import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({urls}) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios
            .get(urls)
            .then(res => setCharacter(res.data))
    },[])

    return (
        <div>
            <li className="cart">
                <h1>{character.name}</h1>
                <img src={character.image} alt="" />
                <h3>Status: {character.status}</h3>
                <p>origin: {character.origin?.name}</p>
                <p>Cant episode: {character.episode?.length}</p>
            </li>
        </div>
    );
};

export default Residents;