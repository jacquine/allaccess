import React, { Component } from 'react'
import { FaAngleLeft } from 'react-icons/fa'


export default class Directions extends Component {
  render() {
    return (
      <div>
          <h1> getting there  </h1>
          <img src={require("../../assets/gettingthere1.png")} alt="map1"/>
          <img src={require("../../assets/gettingthere2.png")} alt="map2"/>
          

          <a href="https://new.mta.info/sites/default/files/2019-03/Accessibility_Guide_8_1.pdf"> Accessibility Guide - MTA </a>

      
          <div><a href="/museumProfile"> <FaAngleLeft className="back" size={30}/></a></div>
        
      </div>
    )
  }
}
