import React from 'react';

export default( {beds} ) => (
    <div>
        < span > <b>Beds Available: </b>{beds}</span>
        <br/>
        <div className="fa fa-bed  icon"/>
        {beds >= 2 ? <div className="fa fa-bed icon" /> : ""}
        {beds >= 3 ? <div className="fa fa-bed icon" /> : ""}
        {beds == 4 ? <div className="fa fa-bed icon" /> : ""}
    </div>
)

