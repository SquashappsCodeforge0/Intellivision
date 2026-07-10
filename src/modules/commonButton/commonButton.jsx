
import React from "react";
import './commonButton.css'

const CommonButton=({color ,fontClr, borderClr , label}) => {
    const buttonStyle = {
        backgroundColor: color,
        color:fontClr,
        // border:borderClr,
      };
    return(
      // <button style={buttonStyle} className="btn-bg">{label}</button>
      <a href="#s" style={buttonStyle} className='butn butn__new'><span>{label}</span></a>

    )
}
export default CommonButton;