import React from "react";
import axios from "axios";
import "./Contact.css";


function Contact(){
  
    const status = "status-online";
    return (
        <div className="Contact">
            <img className="avatar" src="https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg"></img>
            <div className="Contact-content">
                <div className="name">nemri walid</div>
                <div className="status">
                    <div className={status}></div>
                    <div className="status-text">offline</div>
                </div>
            </div>


        </div>
    )
}

export default Contact