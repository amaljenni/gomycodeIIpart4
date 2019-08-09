import React from "react";
export default function Mybutton(props){
    return(
    <button 
    onClick={props.onSimpleClick}
    style={{backgroundColor:"blue",width:"100px",height:"50px"}}>
    {props.label}
    </button>)

}