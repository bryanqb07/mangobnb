import React from 'react';

import Slide from './slide';
import RightArrow from './arrows/right_arrow';
import LeftArrow from './arrows/left_arrow';


export default class Slideshow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIdx: 0
        };
    }

    goToNextSlide(){

    }


    goToPreviousSlide() {

    }

    render(){
        return(
            <div className="slideshow">
                <Slide />
                <LeftArrow goToPreviousSlide={this.goToPreviousSlide}/>
                <RightArrow goToNextSlide={this.goToPreviousSlide}/>
            </div>
        )
    }
}