import React from 'react';

class FontIcon extends React.Component {
    // iconMap =new Map();

    constructor(props) {
        super(props);
        let iconMap = new Map();
        iconMap.set("desktop", "fas fa-tv");
        iconMap.set("css", "fab fa-css3-alt");
        iconMap.set("scss","fab fa-sass")
        iconMap.set("telegram","fab fa-telegram")
        iconMap.set("viber","fab fa-viber")
        this.state = {iconMap};
    }


    render() {

        let iconKey = "";
        try {
            iconKey = this.state.iconMap.get(this.props.name);
        } catch (e) {
            //    wrong name!
        }

        return (
            <i className={iconKey}></i>
        );
    }
}

export default FontIcon;