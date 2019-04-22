import React from 'react';

import Slide from './slide';
import RightArrow from './arrows/right_arrow';
import LeftArrow from './arrows/left_arrow';


class Slideshow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIdx: 0,
        };
        this.photos = photos.photoUrls.slice(1,5);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.goToNextSlide.bind(this), 3000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    goToNextSlide(){
        if (this.state.currentIdx === this.photos.length - 1) {
            return this.setState({
                currentIdx: 0,
            });
        }

        this.setState(prevState => ({
            currentIdx: ( prevState.currentIdx + 1)
        }));
    }

    goToPreviousSlide() {
        if (this.state.currentIdx === 0) {
            return this.setState({
                currentIdx: this.photos.length - 1,
            });
        }

        this.setState(prevState => ({
            currentIdx: (prevState.currentIdx - 1)
        }));
    }

    render(){
        return this.photos ? (
        <div className="slideshow-container">
          <h1>Photos</h1>
          <div className="slideshow">
            <LeftArrow onClick={this.goToPreviousSlide}/>
            <Slide photo={this.photos[this.state.currentIdx]} />
            <RightArrow onClick={this.goToNextSlide}/>
          </div>
        </div>
        ) : (
          <div className="loader" />
        );
    }
}

export default Slideshow;