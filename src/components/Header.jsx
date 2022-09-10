import React from 'react';
import Search from './Search';

const Header = ({setLocation}) => {
    return (
        <div className='header'>
            <h1 style={{color: 'white'}}>Fabian <span>Dev FullStack</span></h1>
            <Search setLocation={setLocation}/>
            <div className='opacity'></div>
        </div>
    );
};

export default Header;