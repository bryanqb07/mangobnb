import React from 'react';
import {Link} from 'react-scroll';

export default () => (
  <div>
    <Link
      to="rooms"
      activeClass="active"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      className="w3-bar-item w3-button w3-mobile"
    >
      Rooms
    </Link>
    <Link 
      to="about" 
      activeClass="active"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      className="w3-bar-item w3-button w3-mobile">
      About
    </Link>
    <Link to="contact" 
      activeClass="active"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      className="w3-bar-item w3-button w3-mobile">
      Contact
    </Link>
  </div>
);