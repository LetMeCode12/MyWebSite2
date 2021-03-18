import React, {Component} from "react"
import "./Console.scss"

class Console extends Component{
    
    componentDidMount(){
        const {children} = this.props;
        console.log("XDD",children.length)
        document.documentElement.style.setProperty('--chLen',`${children.length}ch`)
        document.documentElement.style.setProperty('--chLenCnt',`${children.length}`)
    }

    render(){
        const {children} = this.props;
        return(
            <div className="Console" >
                {children}
            </div>
        );
    }
}

export default Console;