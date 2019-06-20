import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div>
    <Link to="#rooms" className="w3-bar-item w3-button w3-mobile">
      Rooms
    </Link>
    <Link to="#about" className="w3-bar-item w3-button w3-mobile">
      About
    </Link>
    <Link to="#contact" className="w3-bar-item w3-button w3-mobile">
      Contact
    </Link>
  </div>
);