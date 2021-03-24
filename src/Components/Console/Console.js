import React, {Component} from "react"
import "./Console.scss"

class Console extends Component{
    
    // componentDidMount(){
    //     const {children} = this.props;
    //     this.MyConsole.style.setProperty('--chLen',`${children.length}ch`)
    //     this.MyConsole.style.setProperty('--chLenCnt',`${children.length}`)
    // }

    

    render(){
        const {children} = this.props;
        return(
            <div className="Console" style={{"--chLen":`${children.length}ch`,"--chLenCnt":children.length}} ref={reff=>this.MyConsole = reff}>
                {children}
            </div>
        );
    }
}

export default Console;