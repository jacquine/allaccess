import React, { Component } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import './info.css'


export default class Info extends Component {
  render() {
    return (
      <div>
          
          <p>
          Cooper Hewitt Smithsonian Design Museum Ranks…

                <h3>93% in Mobility</h3>
                <h3>90% in Overall Accessibility</h3>

            So what does this mean? Our proprietary ranking rubric assigns a point for each accessibility feature that an institution has. Here are the features currently included in our score. Don’t see a feature you need, want, believe we should consider? Let us know!

           </p>

           <div className="list">
             <a href="#" className="list-group-item">Accessibility Entrance</a><br/>
             <a href="#" className="list-group-item">Accessibility Events</a><br/>
             <a href="#" className="list-group-item">Accessibility Parking</a><br/>
             <a href="#" className="list-group-item">Accessibility Restrooms</a><br/>
             <a href="#" className="list-group-item">All Floors are Wheelchair-Accessible</a><br/>
             <a href="#" className="list-group-item">Assistive Listening Devices</a><br/>
             <a href="#" className="list-group-item">Audio Transcription</a><br/>
             <a href="#" className="list-group-item">Braille Signage</a><br/>
             <a href="#" className="list-group-item">Captioning: Closed, Open, Real-time Captioning, ASL interpretation, CART</a><br/>
             <a href="#" className="list-group-item">Discount - Admission</a><br/>
             <a href="#" className="list-group-item">Discount - Care-partner & Aid</a><br/>
             <a href="#" className="list-group-item">Discount - Membership</a><br/>
             <a href="#" className="list-group-item">Elevators to all floors</a><br/>
             <a href="#" className="list-group-item">Large Print Labels</a><br/>
             <a href="#" className="list-group-item">Service Dogs Allowed</a><br/>
             <a href="#" className="list-group-item">Wheelchair / Device Rental</a><br/>
             <a href="#" className="list-group-item">Wheelchair Accessible Route</a><br/>
           </div>

          <a href="/museumProfile"> <FaAngleLeft className="back" size={30}/></a>
      </div>
    )
  }
}
