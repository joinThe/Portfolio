import React from 'react';
import WorkCard from './WorkCard';

function Works() {
    return (

        <section className="my-works">
            <div className="container">
            <h2 className="title">My works:</h2>
            <div className="content-inner">
                <WorkCard visit="/Alivio%20fixed/index.html" git="https://github.com/"
                          img="img/works/work-card-img-alivio.JPG" name="Alivio" icon={["css", ""]}/>
                <WorkCard visit="/Hofman/index.html" git="https://github.com/"
                          img="img/works/work-card-img-hofman.JPG" name="Hofman" icon={["css", ""]}/>
               <WorkCard visit="/Drive/index.html" git="https://github.com/"
                          img="img/works/work-card-img-drive.JPG" name="Drive" icon={["css", ""]}/>
            {/*todo fix drive */}
            </div>
            </div>
        </section>
    );
}

export default Works;