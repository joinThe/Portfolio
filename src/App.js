import React from 'react';
import './App.css';
import Main from './components/body/Main';
import Header from './components/head/Header';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;