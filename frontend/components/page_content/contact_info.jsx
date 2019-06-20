import React from 'react';

export default () => (
  <div
    className="w3-row-padding w3-large w3-center"
    style={{ margin: "32px 0" }}
  >
    <div className="w3-third">
      <i className="fa fa-map-marker w3-text-red" /> 100, Taipei City,
      Zhongzheng District, Section 1, Zhongxiao West Road, No. 50
    </div>
    <div className="w3-third">
      <i className="fa fa-phone w3-text-red" /> Phone:{" "}
      <a href="tel:886-0988-792-057">+886 0988 792 057</a>
    </div>
    <div className="w3-third">
            <i className="fa fa-envelope w3-text-red" /> Email: {" "}
       <a href="mailto:mangostationtw@gmail.com">mangostationtw@gmail.com</a>
    </div>
  </div>
);
