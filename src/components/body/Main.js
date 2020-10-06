import React from 'react';
import Works from './Works';
import {Route} from "react-router-dom";
import Contact from "./Contact";
import Cv from "./Cv";

function Main() {
    return (

        <main>
            <div class="container">
                <Route path={'/works'} component={Works}/>
                <Route path={'/contact'} component={Contact}/>
                <Route path={'/cv'} component={Cv}/>
                {/*<Works/>*/}
            </div>
        </main>
    );
}

export default Main;