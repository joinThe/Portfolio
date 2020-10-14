import React from 'react';
import {NavLink} from "react-router-dom";


class Link extends React.Component {


    render() {
        return (
            <NavLink className="link-and-button" to={this.props.url}>{this.props.name}</NavLink>
        );
    }
}

export default Link;

// function LinkButton(props) {
//
//
//     return (
//         <NavLink className="link-and-button" to={props.url}>{props.name}</NavLink>
//     );
//
//
//
// }
//
// export default LinkButton;