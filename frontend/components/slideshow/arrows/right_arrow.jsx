import React from 'react';

const RightArrow = ({goToNextSlide}) => (
    <div className="nextArrow">
        <i  className="fa fa-arrow-right fa-2x" 
            aria-hidden="true" 
            onClick={goToNextSlide}>
        </i>
    </div>
)

export default RightArrow;