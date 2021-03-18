import React, { Component } from "react";
import logoReact from "../../Graphics/logoReact.png";
import logoRedux from "../../Graphics/Redux.png";
import logoBootstrap from "../../Graphics/bootstrap.png";
import logoSass from "../../Graphics/sasss.png";

import "./FrontEnd.scss"

class FrontEnd extends Component {
    render() {
        return (
            <div className="FrontEnd">
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
                    <div className="Sector">

                        <p data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" >Redux jest to biblioteka JavaScript służąca do zarządzania stanem aplikacji. Dzieki wykorzystaniu biblioteki Redux możemy wykorzystać biblioteki takie jak redux-modal czy redux-form. Biblioteke Redux wraz z React od około dwóch lat wykorzystywałem w projektach uczelnianych oraz w pracy.   </p>

                        <img src={logoRedux} data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" />

                    </div>

                    <div className="Sector">

                        <img src={logoBootstrap} data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" />
                        <p data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" > Bootstrap jest to biblioteka CSS zawierająca zestaw narzędzi ułatwiających tworzenie interfejsu graficznego.</p>

                    </div>

                    <div className="Sector">

                        <p data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" >Sass jest to język skryptowy preprocesora, który interpretowany jest do postaci CSS. W projektach stosuje generalnie Sass, pozwala on na czytelniejszą oraz łatwiejszą prace. </p>
                        <img src={logoSass} data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out"  />

                    </div>
                </div>
            </div>
        );
    }
}

export default FrontEnd;