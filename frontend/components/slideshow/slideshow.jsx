import React from 'react';

import Slide from './slide';
// import RightArrow from './arrows/right_arrow';
// import LeftArrow from './arrows/left_arrow';


class Slideshow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIdx: 0,
        };
        this.photos = photos.photoUrls.slice(1,5);
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

    render(){
        return(
            this.photos ? (
                <div className="slideshow">
                    <Slide photo={this.photos[this.state.currentIdx]} />
                </div>
            ) : <div className="loader"></div>
        );
    }
}

export default Slideshow;