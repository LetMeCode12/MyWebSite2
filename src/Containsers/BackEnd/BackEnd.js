import React, { Component } from "react";
import logoReact from "../../Graphics/logoReact.png";

import "./BackEnd.scss"

class BackEnd extends Component {
    render() {
        return (
            <div className="BackEnd">
                <div className="Describe">
                    <div className="Sector">
                        <img src={logoReact} data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" />

                        <p data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out">React jest to biblioteka JavaScript. Stworzona przez zespół Facebook, jest wykorzystywana do tworzenia interfejsów graficznych aplikacji internetowych. Z biblioteką React pracuję od około dwóch lat, wykorzystywałem ją zarówno w projektach uczelnianych jak również w pracy.  </p>

                    </div>
                   
                </div>
            </div>
        );
    }
}

export default BackEnd;