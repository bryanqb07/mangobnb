import React from 'react';

export default( {beds, icon} ) => (
    <div>
        < span > <b>Beds Available: </b>{beds}</span>
        <br/>
            <img className="icon" src={icon} alt="icon-image"/>
        {beds >= 2 ? <img className="icon" src={icon} alt="icon-image" /> : ""}
        {beds >= 3 ? <img className="icon" src={icon} alt="icon-image" /> : ""}
        {beds == 4 ? <img className="icon" src={icon} alt="icon-image" /> : ""}
    </div>
)

