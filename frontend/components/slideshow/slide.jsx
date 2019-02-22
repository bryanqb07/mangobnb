import React from 'react';

const Slide = ({photo}) => {
    const styles = {
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    };
    
    return <div className="slide" style={styles}></div>
}

export default Slide;