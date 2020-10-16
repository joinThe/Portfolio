import React from 'react';
import FontIcon from "./FontIcon";

let textArea = React.createRef();

let click = ()=> {
    alert(textArea.current.value);
};

function Contact() {
    return (

        <section className="contact">
            <div className="container">
            <div className="phones">
                        <i className="fas fa-mobile-alt"></i>
                        <div className="phone-grope">

                            <p className="phone">+380997374076<FontIcon name='telegram'/>
                            </p>
                            <p className="phone">+380638238310<FontIcon name='viber'/>
                            </p>

                        </div>

                    </div>
            <div class="email">
                <span>stadnikGleb@gmail.com</span>
            </div>
            <div class="text-for-me">
                <h3 className="title">You also can write me: </h3>
                
                    <textarea name="text" id="textForMe" ref={textArea} className="area"></textarea>

                    <button onClick={click} className="link-and-button"> Send</button>

            </div>

            </div>
        </section>
    );
}

export default Contact;