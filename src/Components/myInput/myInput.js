import "./myInput.scss"
import {useEffect, useRef} from 'react'

export default function MyInput (props) {
    const {field,form:{touched,errors}} = props;

    const errorRef = useRef();

    const isError=()=>touched[field.name]&&errors[field.name];
    // useEffect(()=>{
    //     if(isError){
    //         errorRef.current.setAttribute("ErrorText",errors[field.name])
    //     }
    // })
    
    return(
        <div className={`MyInput ${isError()?"Error":""}`} ErrorText={errors[field.name]} ref={errorRef}>
            <input className={`form-control ${isError()?"Error":""}`} {...field} {...props}/>
        </div>
    )
}