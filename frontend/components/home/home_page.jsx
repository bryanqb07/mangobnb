import React from 'react';
import Slideshow from '../slideshow/slideshow';
import SearchBar from '../search/search_bar';
import Map from '../map/map';
import Footer from './footer';
import About from './popups/about';
import Amenities from './popups/amenities';
import Contact from './popups/contact';
import Payment from "./popups/payment";

export default () => (
  <div className="home-container">
    {/* menu bar */}
    <div>
      <About />
      <Amenities />
      <Contact />
      <Payment />
    </div>

    {/* end */}
    <div>
      <SearchBar />
      <Map />
      <Slideshow />
      <Footer />
    </div>
  </div>
);