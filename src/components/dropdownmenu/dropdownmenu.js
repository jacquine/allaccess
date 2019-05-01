import React, { Component } from 'react'
import './dropdownmenu.css'

export default class DropdownMenu extends Component {
  render() {
    return (
      <div className="pageLayout">
        <div className="dropdown">
          <img src={require("../../assets/dropdown-m.png")} alt="list of filters"/>
        </div>
        
        <div className="map">
          <img src={require("../../assets/map.png")} alt=""/>
        </div>
      </div>
    )
  }
}
