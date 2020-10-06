import React from 'react';

function WorkCard(){
    return(
        <div className="my-works__card">
  
  <img src="img/works/work-card-img-alivio.JPG" alt="work" class="card-img"/>

  <div class="description">
    <div class="info">
      <h3 class="sub-title">    Info     </h3>
      <div class="content-inner">
        <span class="description-item">
            <i class="fas fa-tv"></i> for Desktop (Full-HD screen) 
        </span>
      </div>
    </div>
    <div class="used">
      <h3 class="sub-title">    I used      </h3>
         <span class="description-item">
          <i class="fab fa-css3-alt"></i> CSS 
         </span>
      </div>

  </div>

        </div>
      );
}

export default WorkCard;