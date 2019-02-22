import React from 'react';

const LeftArrow = ({ goToPreviousSlide }) => (
    <div className="backArrow">
        <i  className="fa fa-arrow-left fa-2x" 
            aria-hidden="true"
            onClick={goToPreviousSlide}>
        </i>
    </div>
)

export default LeftArrow;