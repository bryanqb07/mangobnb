import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeNav from './home_nav';

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
    return (
      <div className="w3-bar w3-white w3-large">
        <a href="#" className="w3-bar-item w3-button w3-yellow w3-mobile">
          <i className="fa fa-bed w3-margin-right" />
          MangoBnb
        </a>
        { window.location.href == "http://localhost:3000/#/" ? <HomeNav /> : ""}
        <div className="w3-bar-item w3-right w3-mobile">
            <i className="fa fa-phone w3-text-yellow" /> Phone:{" "}
            <a href="tel:886-0988-792-057" style={{marginRight:"15px"}}>+886 0988 792 057</a>
            <i className="fa fa-envelope w3-text-yellow" /> Email: {" "}
            <a href="mailto:mangostationtw@gmail.com">
              mangostationtw@gmail.com
            </a>
          
        </div>
      </div>
    );
  }
}


export default NavBar;
