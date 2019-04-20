import React from 'react';

function topFunction(e) {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default () => (
    <div className="footer">
        <button onClick={topFunction}>Book Now!</button>
        <footer className="copyright_text">
            Copyright &copy; 2018–2019
            Mangobnb.com. All rights reserved.
        </footer>
    </div>
)