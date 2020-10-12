import React from "react";
import PropTypes from 'prop-types';
import "./Contact.css";

Contact.propTypes = {
    user : PropTypes.exact({
        name: PropTypes.string,
        image: PropTypes.string,
        online: PropTypes.bool.isRequired
    }),
}

function Contact(props){
  
    const status = props.user.online ? "status-online":"status-offline";
    return (
        <div className="Contact">
            <img alt="" className="avatar" src={props.user.image}></img>
            <div className="Contact-content">
                <div className="name">{props.user.name}</div>
                <div className="status">
                    <div className={status}></div>
                    <div className="status-text">{ props.user.online ? "online":"offline"}</div>
                </div>
            </div>


        </div>
    )
}


export default Contact