import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './popups/about';
import Amenities from "./popups/amenities";
import Payment from "./popups/payment";
import Contact from "./popups/contact";


class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { showMenu: false };
    this.handleClick = this.handleClick.bind(this);
}

  handleClick(e){
    e.preventDefault();
    // e.target.style = {
    //     borderRadius: "1px solid black",
    //     color: "red"
    // };

    console.log(e.target);
    const ele = document.getElementById(e.target.value);
    console.log(ele);
    ele.style = {
        display: "block",
        height: "300px",
        width: "300px"
    };
    console.log(ele.style);
    this.setState({showMenu: true});
  }

  render(){
    return photos ? (
      <div className="nav-bar">
        <div className="left-nav">
          <h1>MangoBnb</h1>
          <img id="logo" src={photos.photoUrls[0]} alt="image" />
        </div>

        <div className="right-nav">
          <div className="right-nav-top">
            <a id="phone" href="tel: 5551234567">
              &#128222; <span>555-123-4567</span>
            </a>
            <a
              id="mail"
              href="mailto:mango@mail.com?Subject=Booking%20Question"
            >
              &#x2709;
            </a>
            <button>中文</button>
          </div>
          <div className="right-nav-bottom">
            <button value="about" onClick={this.handleClick}>
              About
            </button>
            <button value="payment" onClick={this.handleClick}>
              Payment
            </button>
            <button value="amenities" onClick={this.handleClick}>
              Amenities
            </button>
            <button value="contact" onClick={this.handleClick}>
              Contact
            </button>

            {/* <NavLink to="/" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/" activeClassName="active">
              Payment
            </NavLink>
            <NavLink to="/" activeClassName="active">
              Amenities
            </NavLink>
            <NavLink to="/" activeClassName="active">
              Contact
            </NavLink> */}
          </div>
        </div>
        <div className="dropdown-menu">
          <About />
          <Amenities />
          <Payment />
          <Contact />
        </div>
      </div>
    ) : (
      <div className="loader" />
    );
  }


}


export default NavBar;
