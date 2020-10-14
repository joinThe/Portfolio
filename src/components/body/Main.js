import React from 'react';
import Works from './Works';
import {Route} from "react-router-dom";
import Contact from "./Contact";
import Cv from "./Cv";

function Main() {
    return (

        <main>
                <Route path={'/works'} render={()=><Works/>}/>
                <Route path={'/contact'} render={()=><Contact/>} />
                <Route path={'/cv'} render={()=><Cv/>}/>

        </main>
    );
}

export default Main;