import React from 'react';
import SearchBar from '../search/search_bar';
import Map from '../map/map';
import Footer from './footer';
import PageContent from '../page_content/page_content';

class HomePage extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getPhotos();
  }

  render(){
    return (
        <div className = "home-container" >
          <SearchBar />
          < PageContent photos={this.props.photos}/>
          <Footer />
        </div >
  )
  }
}

export default HomePage;
