import React from 'react';

const Review = ({ review }) => {
    return (
    <div className="review">
        <span className="review-name">{review.name}</span>
        <div className="body">
            <div className="message">
                <span>{review.body}</span>
            </div>
        </div>
    </div>)
}

export default Review;