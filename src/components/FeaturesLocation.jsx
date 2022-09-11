import React from 'react';

const FeaturesLocation = ({location}) => {
    return (
        <div className='search-results'>
            <h1>{location.name}</h1>
            <h3><span>kind:</span> {location.type}</h3>
            <h3><span>Dimension:</span> {location.dimension}</h3>
            <h3><span>Population:</span> {location.residents?.length}</h3>
        </div>
    );
};

export default FeaturesLocation;