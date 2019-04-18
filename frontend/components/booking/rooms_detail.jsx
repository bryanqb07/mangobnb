import React from 'react';
import BedsIconDetail from './beds_icon_detail';

export default( { rooms, roomPhotos } ) => (

    <div className="beds-container">
        <h3>Room Availability</h3>
        <div className="beds-wrapper">
            <div className="bed-container-1">
                <img className="room-photo" src={photos.photoUrls[2]} alt="bed1-image" />
                <br />
                <b>Title: </b><span>Male/Female Mixed Dorm Room</span><br />
                { rooms[1].open_beds ?
                    < BedsIconDetail beds={rooms[1].open_beds} /> :
                    <span>No beds available for these dates.</span>
                }
            </div>
            <div className="bed-container-2">
                <img className="room-photo" src={photos.photoUrls[2]} alt="bed2-image" />
                <br />
                <b>Title: </b><span>Females Only Dorm Room</span>
                <br />
                {
                    rooms[2].open_beds ?
                        < BedsIconDetail beds={rooms[2].open_beds} /> :
                        <span>No beds available for these dates.</span>
                }
            </div>
        </div>
    </div>
)
