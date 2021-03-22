import React, { Component } from "react";
import logoGit from "../../Graphics/git.png";
import logoDocker from "../../Graphics/docker.png";


import "./Others.scss"

class Others extends Component {
    render() {
        return (
            <div className="Others">
                <div className="Describe">
                    <div className="Sector">
                        <img src={logoGit} data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" />
                        <p data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out">Git to system kontroli wersji. Wykorzystywałem go za równo w pracy jak i w zastosowaniu uczelnianym do pracowania grupowego nad projektami oraz przechowywania projektów. Używałem zarówno Githuba jak i CodeCommit od AWS. </p>
                    </div>
                    <div className="Sector">
                    <p data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-duration="1500"
                            data-sal-easing="ease-out" >Docker to narzędzie służące do tworzenia, wdrażania oraz uruchamiania aplikcaji rozproszonych. Wykorzystywałem je głównie do wdrażania aplikacji na serverach VPS za pomocą DockerHub.</p>
                    <img src={logoDocker} data-sal="slide-left"
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