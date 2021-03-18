import React, { Component, createRef } from 'react';
import "./NavBar.scss"
import Logo from "../../Graphics/utp.png"

export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.navRef=createRef();
    }

    checkSection=(start,end)=>{
        return window.scrollY>=document.querySelector(start)?.offsetTop-300 && window.scrollY < document.querySelector(end)?.offsetTop-300;
    }


    findSector=()=>{
        if(window.scrollY<document.getElementsByClassName("AboutMe")[0].offsetTop-300){
            this.activeChanage("Strona główna");
        }else if(this.checkSection(".AboutMe",".FrontEnd")){
            this.activeChanage("O mnie");
        }else if(this.checkSection(".FrontEnd",".BackEnd")){
            this.activeChanage("Front-End");
        }else if(this.checkSection(".BackEnd",".Tests")){
            this.activeChanage("Back-End");
        }else if(this.checkSection(".Tests",".Others")){
            this.activeChanage("Testy");
        }else if (this.checkSection(".Others",".Contact")){
            this.activeChanage("Inne technologie");
        }else if(window.scrollY>=document.querySelector(".Contact")?.offsetTop-300 && window.scrollY<document.body.scrollHeight){
            this.activeChanage("Kontakt");
        }
    }

    changeNavPosition=()=>{
        if(window.scrollY>=document.getElementsByClassName("AboutMe")[0].offsetTop-10){
            this.navRef.current.style.position="sticky"
        }else{
            this.navRef.current.style.position="relative"
        }
    }

    componentDidMount(){
        this.findSector();
        window.onscroll=()=>{
            this.changeNavPosition();
            this.findSector();
        }
    }

    activeChanage=(name)=>{
        Array.prototype.filter.call(document.getElementsByClassName("nav-link"), element => {
            element.parentElement.classList.remove("active")
            if(name===element.innerHTML){
                element.parentElement.classList.add("active")
            }
        });
    }

    onClick = (e) => {
        e.preventDefault();
        const target = e.target;
        switch (target.innerHTML) {
            case "Strona głowna":
                console.log("Strona główna")
                window.scrollTo({top:0,behavior:"smooth"});
                break;
            case "O mnie":
                window.scrollTo({top:document.getElementsByClassName("AboutMe")[0].offsetTop,behavior:"smooth"});
            break;
            case "Front-End":
                window.scrollTo({top:document.getElementsByClassName("FrontEnd")[0].offsetTop,behavior:"smooth"});
                break;
            case "Back-End":
                console.log("Back-End")
                window.scrollTo({top:document.getElementsByClassName("BackEnd")[0].offsetTop,behavior:"smooth"});
                break;
            case "Testy":
                window.scrollTo({top:document.getElementsByClassName("Tests")[0].offsetTop,behavior:"smooth"});
                console.log("Testy")
                break;
            case "Inne technologie":
                window.scrollTo({top:document.getElementsByClassName("Others")[0].offsetTop,behavior:"smooth"});
                console.log("Inne technologie")
                break;
            case "Kontakt":
                window.scrollTo({top:document.getElementsByClassName("Contact")[0].offsetTop,behavior:"smooth"});
                console.log("Kontakt")
                break;
            default:
                console.log("Strona głowna")
                window.scrollTo({top:0,behavior:"smooth"});

        }

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-none" ref={this.navRef}>
                <a className="navbar-brand" href="#"> <img className="Logo" src={Logo}/>Welcome to my website</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" onClick={this.onClick}>
                        <li className="nav-item active">
                            <a className="nav-link" >Strona główna</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" >O mnie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Front-End</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Back-End</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Testy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Inne technologie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Kontakt</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}