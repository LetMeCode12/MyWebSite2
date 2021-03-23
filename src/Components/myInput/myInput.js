import "./myInput.scss"
import {useEffect, useRef} from 'react'

export default function MyInput (props) {
    const {field,form:{touched,errors}} = props;

    const errorRef = useRef();

    console.log("SD",touched,errors)
    const isError=()=>touched[field.name]&&errors[field.name];
    useEffect(()=>{
        if(isError){
            errorRef.current.setAttribute("ErrorText",errors[field.name])
            console.log("Errr",[errorRef.current]);
        }
    })
    
    return(
        <div className={`MyInput ${isError()?"Error":""}`} ref={errorRef}>
            <input className={`form-control ${isError()?"Error":""}`} {...field} {...props}/>
        </div>
    )
}