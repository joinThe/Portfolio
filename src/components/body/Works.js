import React from 'react';
import WorkCard from './WorkCard';

function Works(){
    return(
   
        <section className="my-works">
        <h2 className="title">My works:</h2>
        <div className="content-inner">
      <WorkCard/>
      </div>
            
         </section>
      );
}

export default Works;