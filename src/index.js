import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import { createStore } from "redux";
//import the <Provider> component from react-redux and wrap it around our entire app.
import { Provider } from "react-redux";

import reducer from './Data/reducer'
import initial from './Data/initial'

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


ReactDOM.render(
    <Provider store={store}>
      {/*Using React.Fragments let you group a list of children without adding extra nodes to the DOM.*/}
      	<App />
    </Provider>,	
    document.getElementById("root"),
    );


