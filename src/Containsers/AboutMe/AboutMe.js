import React, { Component } from "react"
import "./AboutMe.scss"
import Logo from "../../Graphics/utp.png"

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <div className="Describe">
                    <div data-sal="slide-right"
                        data-sal-delay="300"
                        data-sal-duration="1500"
                        data-sal-easing="ease-out"><img className="Logo" src={Logo} /></div>
                    <div data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-duration="1500"
                        data-sal-easing="ease-out"><p>Ukończyłem pierwszy stopień informatyki stosowanej na Uniwersytecie Technologiczno-Przyrodniczym im. Jana i Jędrzeja Śniadeckich w Bydgoszczy. Przez prawie dwa lata zajmowałem stanowisko frontend developera pracując z biblioteką React oraz Redux. Zajmowałem się między innymi wprowadzaniem nowych funkcionalności, poprawianiem błędów, testowaniem unit z wykorzystaniem mocha.js oraz e2e przy użyciu cypress.io. W tym roku planuje kontynuować nauczanie w formie zaocznej, na kierunku informatyka stosowana. Interesuje mnie tworzenie aplikacji webowych oraz projektowanie serwisów sieciowych. W przyszłości chciałbym zajmować stanowisko fullstack developera. Interesują mnie również technologie SSR, miedzy innymi biblioteka next.js. Jestem otwarty na poznawanie nowych technologii. Poniżej znajduje sie link do jednego z moich projektów, został on stworzony w oparciu o technologie react, redux oraz chmurę AWS z wykorzystaniem lambd, DynamoDB, S3, Cognito, Amplify. </p> <a href="https://master.dphz25phueft1.amplifyapp.com/#/content/P">Projekt</a>, <a href="https://github.com/LetMeCode12/MyWebsite2">Github strony</a></div>
                </div>
            </div>
        );
    }
}

export default AboutMe;