import React from 'react';
import './App.css';


//importing components from their suitable root directeries
import Header from './Components/Header';
import Form from './Containers/Players';

const App = () => (
    <React.Fragment>
        { /* header should show on all pages */ }
        <Header />
        <Form />
    </React.Fragment>
);

export default App;

