import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Contact.css";



class Contact extends Component{
    state = {
        online: this.props.online,
    }

    changeStatus = () => {
        this.setState(prevState => ({ online: !prevState.online }))
    }

    render(){
        const status = this.state.online? "status-online":"status-offline";
        const { name, avatar } = this.props;
        return (
            <div className="Contact">
                <img alt="" className="avatar" src={ avatar }></img>
                <div className="Contact-content">
                    <div className="name">{ name }</div>
                    <div className="status" onClick={ this.changeStatus }>
                        <div className={ status }></div>
                        <div className="status-text" >{ this.state.online ? "online":"offline" }</div>
                    </div>
                </div>
    
    
            </div>
        )

    }
  
}

Contact.propTypes = { 
    name: PropTypes.string,
    avatar: PropTypes.string,
    online: PropTypes.bool
}


export default Contact