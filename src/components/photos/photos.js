import React, { Component } from 'react'
import './photos.css'
import { FaAngleLeft } from 'react-icons/fa'

export default class Photos extends Component {
  render() {
    return (
      <div>
            <img src={require("../../assets/wheelchair.jpg")} alt="Wheelchair Accessibility"/>
            <p> Wheelchair Entrance</p>
          <img src={require("../../assets/accessiblerestroom.jpg")} alt=""/>
          <p> Accessible Restroom </p>
          <img src={require("../../assets/elevator.jpg")} alt=""/>
          <p> Elevator </p>
          <img src={require("../../assets/cooperpressroom.jpg")} alt=""/>
          <p> Press Room Gallery at Cooper Hewitt Smithsonian Design Museum </p>
          <img src={require("../../assets/coopergallery.jpg")} alt=""/>
          <p> Gallery at Cooper Hewitt Smithsonian Design Museum </p>
          <img src={require("../../assets/coopergallery2.jpg")} alt=""/>
          <p> Gallery at Cooper Hewitt Smithsonian Design Museum </p>
          
          <a href="/museumProfile"> <FaAngleLeft className="back" size={30}/></a>


          
          

        
      </div>
    )
  }
}
