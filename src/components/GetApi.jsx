import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeaturesLocation from './FeaturesLocation';
import Footer from './Footer';
import Header from './Header';
import ResidentInfo from './ResidentInfo';


const GetApi = () => {

    const [location, setLocation] = useState({})
    const idRandom = Math.floor(Math.random() * 125) + 1


    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${idRandom}`)
            .then(res => setLocation(res.data))
    },[])

    console.log(location)

    return (
        <div className='location'>
            <div >
            <Header setLocation={setLocation}/>
            </div>
            <div>
                <h1 className='location-h1'>Citadel of Rick</h1>
                <FeaturesLocation location={location}/>
            </div>
            <div className='containerResidents'>
                <div className='residents-c'>Residentes</div>
                <ResidentInfo location={location}/>
            </div>
            <Footer />
        </div>
    );
};

export default GetApi;