import React from 'react';

const Review = ({ review }) => {
    return (
    <div className="review">

        <span className="review-name">{review.name}</span>
        <div className="body">
            <span className="tip tip-up"></span>
            <div className="message">
                <span className="review-body">{review.body}</span>
            </div>
        </div>
    </div>)
}

export default Review;