import React, { Component } from "react"
import Console from "../../Components/Console/Console";
import "./Home.scss"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Describe" >
                    <Console>Nazywam sie Norbert i witam na mojej stronie :)</Console>
                </div>
            </div>
        );
    }
}

export default Home;