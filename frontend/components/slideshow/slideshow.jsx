import React from 'react';

import Slide from './slide';
import RightArrow from './arrows/right_arrow';
import LeftArrow from './arrows/left_arrow';


export default class Slideshow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIdx: 0,
        };
    }

    componentDidMount(){
        this.timer = setInterval(this.goToNextSlide.bind(this), 3000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    goToNextSlide(){
        if (this.state.currentIdx === this.props.photos.length - 1) {
            return this.setState({
                currentIdx: 0,
            });
        }

        this.setState(prevState => ({
            currentIdx: ( prevState.currentIdx + 1)
        }));
    }

    render(){
        const photos = this.props.photos;
        return(
            <div className="slideshow">
                <Slide photo={photos[this.state.currentIdx]} />   
            </div>
        )
    }
}