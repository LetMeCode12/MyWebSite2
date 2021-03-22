import React, { Component } from "react";
import logoMocha from "../../Graphics/mocha.png";
import logoCypress from "../../Graphics/cypress.png";


import "./Others.scss"

class Others extends Component {
    render() {
        return (
            <div className="Others">
                <div className="Describe">
                    <div className="Sector">
                        <p data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out">Cypress.io jest to narzędzie do automatyzacji testów. Pisalem w nim testy e2e na potrzeby działania aplikacji w poprzedniej pracy.</p>
                        <img src={logoCypress} data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Others;