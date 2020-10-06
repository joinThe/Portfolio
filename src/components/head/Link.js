import React from 'react';

function LinkButton(props){
    // todo  buutton choice 
    // let teg="a"
    //  if(!props.link){
// teg="button"
        // }

    return(
        // temp span instad of a
          <span className="link-and-button" href="#">{props.name}</span>
         );
}

export default LinkButton;