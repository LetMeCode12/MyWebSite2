import React,{Component} from "react";
import MailForm from "../../Components/Form/MailForm";
import "./Contact.scss";

class Contact extends Component {


    render(){
        return(
            <div className="Contact">
                <div className="FormContainer">
                    <MailForm/>
                </div>
                
            </div>
        );
    }
}

export default Contact;