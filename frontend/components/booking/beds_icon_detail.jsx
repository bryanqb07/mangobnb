import React from 'react';

export default( {beds} ) => (
    <div>
        < span > <b>Beds Available: </b>{beds}</span>
        <br/>
        <img className="icon" src={photos.photoUrls[5]} alt="icon-image"/>
        {beds >= 2 ? <img className="icon" src={photos.photoUrls[5]} alt="icon-image" /> : ""}
        {beds >= 3 ? <img className="icon" src={photos.photoUrls[5]} alt="icon-image" /> : ""}
        {beds == 4 ? <img className="icon" src={photos.photoUrls[5]} alt="icon-image" /> : ""}
    </div>
)

