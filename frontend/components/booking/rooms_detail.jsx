import React from 'react'

export default( { rooms }, { roomPhoto }) => (

    <div className="beds-container">
        <h3>Room Availability</h3>
        <div className="beds-wrapper">
            <div className="bed-container-1">
                <img src={roomPhoto} alt="bed1-image" />
                <br />
                <b>Title: </b><span>Male/Female Mixed Dorm Room</span><br />
                { rooms[1].open_beds ?
                    <span><b>Beds Available: </b>{rooms[1].open_beds}</span> :
                    <span>No beds available for these dates.</span>
                }
            </div>
            <div className="bed-container-2">
                <img src={roomPhoto} alt="bed2-image" />
                <br />
                <b>Title: </b><span>Females Only Dorm Room</span><br />
                {
                    rooms[2].open_beds ?
                        <span><b>Beds Available: </b>{rooms[2].open_beds}</span> :
                        <span>No beds available for these dates.</span>
                }
            </div>
        </div>
    </div>
)