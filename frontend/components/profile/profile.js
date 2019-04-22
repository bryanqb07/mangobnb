import React from 'react';

// class Profile extends React.Component{
//     constructor(props){
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     // handleSubmit(e){
//     //     e.preventDefault();
//     // }

    export default () => (
            <div>
                <h1>Welcome MangoBnb Admin</h1>
                <ul>List of customers checking in today
                    <li>No bookings today.</li>
                </ul>
                <p>Search for booking by confirmation #</p>
                <form>
                    <input type="text"></input>
                    <button>Search</button>
                </form>
                <p>Cancel Booking</p>
                <p>Adjust prices by date</p>
                <p>Adjust room availability by date</p>
            </div>
    )
    
// }

// export default Profile;
