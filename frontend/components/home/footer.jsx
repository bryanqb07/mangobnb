import React from 'react';

function topFunction(e) {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default () => (
  <div className="footer">
    <footer className="w3-padding-32 w3-black w3-center w3-margin-top">
      <h5>Like Us On Facebook</h5>
      <div className="w3-xlarge w3-padding-16">
            <a target="_blank" href="https://www.facebook.com/Mango-station%E8%8A%92%E6%9E%9C%E9%A9%9B%E7%AB%99-1612770022323148/"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
      </div>
      <span>Copyright &copy; 2018–2019 Mangobnb.com. All rights reserved.</span>
    </footer>
  </div>
);