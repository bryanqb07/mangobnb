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
        <About />
        <Amenities />
        <Contact />
        <Payment />
        {/* end */}
        <SearchBar />
        <Map />
        <Slideshow />
        <Footer />
  </div>
);