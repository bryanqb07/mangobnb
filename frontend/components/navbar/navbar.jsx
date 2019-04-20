import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { selected: "none", currEle: "none"};
    this.handleClick = this.handleClick.bind(this);
}

  handleClick(e){
    e.preventDefault();
    const val = e.target.value;
 
    //remove last menu item to replace with new one
    if(this.state.selected != "none" || val == this.state.selected){
      const lastItem = document.getElementById(this.state.selected);
      lastItem.style.display = "none";
      this.state.currEle.style.color = "white";
    }

    // don't append the same menu item if clicked more than once

    
    let ele = document.getElementById(val);
    e.target.style.color = "red";
    ele.style.display = "block";
    this.setState({ selected: val, currEle: e.target});

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
            <button>日本語</button>
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
{/* 
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/payment" activeClassName="active">
              Payment
            </NavLink>
            <NavLink to="/amenities" activeClassName="active">
              Amenities
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink> */}
          </div>
        </div>
        {/* <div className="dropdown-menu">
          <About />
          <Amenities />
          <Payment />
          <Contact />
        </div> */}
      </div>
    ) : (
      <div className="loader" />
    );
  }


}


export default NavBar;
