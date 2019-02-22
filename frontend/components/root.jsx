import React from 'react';
// import { Provider } from 'react-redux'; COMMENT IN AFTER STORE BUILT
import { HashRouter } from 'react-router-dom';

import App from './app';

export default() => (
    <HashRouter>
        <App />
    </HashRouter>
)

//add store later