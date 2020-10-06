import React from 'react';
import FontIcon from "./FontIcon";

class WorkCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-works__card">

                <div className="img-wrapper">
                    <div className="links">
                        <a className="visit-link" target="_blank" href={this.props.visit}>View</a>
                        {/*todo rename Alivio folder*/}
                        <a className="visit-link" target="_blank" href={this.props.git}>Git</a>
                    </div>
                    <img src={this.props.img} alt="work" class="card-img"/>
                </div>

                <div className="description">
                    <div className="info">
                        <h3 className="sub-title">{this.props.name}</h3>


                    </div>
                    <div className="used">

                        <span className="description-item">
                            {this.props.icon.map(s =>{
                               return <FontIcon name={s}/>
                            })}

                        </span>
                    </div>

                </div>

            </div>
        );
    }
}

export default WorkCard;