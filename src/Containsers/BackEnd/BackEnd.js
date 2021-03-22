import React, { Component } from "react";
import ExpressLogo from "../../Graphics/ExpressjsLogo.png";
import SpringBootLogo from "../../Graphics/SpringBootLogo.png";
import awsLogo from "../../Graphics/awsLogo.png";


import "./BackEnd.scss"

class BackEnd extends Component {
    render() {
        return (
            <div className="BackEnd">
                <div className="Describe">
                    <div className="Sector">
                        <img src={ExpressLogo} data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out"/>
                        <p data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out">Express.js jest to szkielet aplikacji internetowych zaplecza dla node.js. Wykorzystywałem go głowienie do tworzenia interfejsów API. Używałem w nim takich bibliotek jak między innymi sequelize, preer.js, nodemailer.</p>
                    </div>
                    <div className="Sector">
                        <p data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out">SpringBoot jest to framework oparty o język programowania Java. Stosowany to tworzenia serwisów sieciowych, mikroserwisów. Stosowałem go w projektach prywatnych oraz uczelnianych. Najczęściej swe projekty opierałem o narzędzie automatyzujące Maven oraz framework Hibernate. Jeśli zajdzie taka potrzeba udostępnię swoje projekty.</p>
                        <img src={SpringBootLogo} data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out"/>
                    </div>
                    <div className="Sector">
                        <img src={awsLogo} data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" />
                        <p  data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out">Chmura AWS udostepnia szereg możliwości. Ja pracowałem w obrębie DynamoDB, Lambda, RDS, EC2, S3, Cognito, Amplify. Pierwszy kontakt z chmurą mialem w poprzedniej pracy, następnie zainteresowałem się tą technologią i tworzyłem przy ich użyciu projekty na uczelnie oraz realizowałem własne projekty. Co do serverów VPS oprócz AWS również działam na VPS od Google.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BackEnd;