import React, { Component } from 'react'
import Footer2 from '../footer2/footer2'
import RatingButton from '../ratingbutton/ratingbutton.js'
import '../museumProfile/museumProfile.css'

export default class MuseumProfile extends Component {
  render() {
    return (
      <div className="pageLayout">

          <div className="rateButton"><RatingButton /></div>
          <div className="info">
          <img src={require("../../assets/cooperhewitt.jpeg")} alt="map1"/>
          <img src={require("../../assets/info1.png")} alt="map2"/> 
          <img src={require("../../assets/info2.png")} alt="map3"/>  
          </div>
          <Footer2 className="footer"/>
        
      </div>
    )
  }
}
