import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    let store;
    if(window.currentUser){
      const preLoadedState = {
        entities: { users: { [window.currentUser.id]: window.currentUser } },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preLoadedState);
    }else{
      store = configureStore();
    }

    ReactDOM.render(<Root store={store}/>, root);
});
