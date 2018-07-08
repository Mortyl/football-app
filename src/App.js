import React from 'react';
import './App.css';


//importing components from their suitable root directeries
import Players from './Containers/Players';
import Header from './Components/Header';
import Action from './Containers/Action'


const App = () => (
    <React.Fragment>
        { /* header should show on all pages */ }
        <Header />
        <Action />
        <Players />
    </React.Fragment>
);

export default App;

