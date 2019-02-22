import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getRooms();
    }

    render(){
        const photos = this.props.photos;
        const logo = photos ? photos[0] : "";

        return(
        <div className="nav-bar">

            <div className="left-nav">
                <h1>MangoBnb</h1>
                <img id="logo" src={logo} alt="image" />
            </div>

            <div className="right-nav">
                <div className="right-nav-top">
                    <a id="phone" href="tel: 5551234567">
                        &#128222;
                    </a>
                    <a id="mail" href="mailto:mango@mail.com?Subject=Booking%20Question">
                        &#x2709;
                    </a>
                    <button>English</button>
                    <NavLink to="/booking" 
                        activeClassName="active"
                        className="button">BOOK NOW</NavLink>
                </div>
                <div className="right-nav-bottom">
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/payment" activeClassName="active">Payment</NavLink>
                    <NavLink to="/amenities" activeClassName="active">Amenities</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </div>
            </div>
        </div>
        )    
    }
}

export default NavBar;

