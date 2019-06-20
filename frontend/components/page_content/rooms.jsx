import React from 'react';

const imgStyle = {
    width: "100%"
};

export default ({ photos }) => (
  <div>
    <div className="w3-container w3-margin-top" id="rooms">
      <h3>Rooms</h3>
      <p>
        Make yourself at home is our slogan. We offer the best beds in the
        industry. Sleep well and rest well.
      </p>
    </div>

    <div className="w3-row-padding w3-padding-16">
      <div className="w3-half w3-margin-bottom">
        <img src={photos.photoUrls ? photos.photoUrls[2] : ""} alt="Norway" style={imgStyle} />
        <div className="w3-container w3-white">
          <h3>Single Bed in Mixed Dorm </h3>
          <h6 className="w3-opacity">From NT$ 1000</h6>
          <p>Single bed</p>
          <p>
            20m<sup>2</sup>
          </p>
          <p className="w3-large">
            <i className="fa fa-bath" /> <i className="fa fa-wifi" />
          </p>
        </div>
      </div>
      <div className="w3-half w3-margin-bottom">
        <img src={photos.photoUrls ? photos.photoUrls[2] : ""} alt="Norway" style={imgStyle} />
        <div className="w3-container w3-white">
          <h3>Single Bed in Females Only Dorm</h3>
          <h6 className="w3-opacity">From NT$ 1000</h6>
          <p>Single bed</p>
          <p>
            20m<sup>2</sup>
          </p>
          <p className="w3-large">
            <i className="fa fa-bath" /> <i className="fa fa-wifi" />{" "}
            <i className="fa fa-tv" />
          </p>
        </div>
      </div>
    </div>
  </div>
);