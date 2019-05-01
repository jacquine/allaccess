import React, { Component } from 'react'
import './Museum.css'

export default class Museum extends Component {

    constructor(props) {
        super(props);

    }

    render() {
    return (
      <div className="museumsList">
          <a href="/museumprofile">
            <div className="cooperContainer">
              {/* <button className="rating_c">9/10 Accessibility</button> */}
              <div className="museumName">{this.props.name}</div>
              <div className="address">{this.props.address}</div>
              <div className="hours">Opening hours: {this.props.hours}</div>
              <div className="phone">Phone: {this.props.phone}</div>
              <div className="wcAccess">Wheelchair Access: {this.props.wheelchairAccess}</div>
            </div>
            <div className="frickContainer">
            </div>
          </a>
          
    </div> 
    
    )
    }
} 
