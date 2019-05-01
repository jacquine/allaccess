import React, { Component } from 'react'
import './community.css'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAccessibleIcon} from 'react-icons/fa'
import { FaDeaf } from 'react-icons/fa'
import { FaUniversalAccess} from 'react-icons/fa'
import { FaBlind } from 'react-icons/fa'
import { FaWheelchair } from 'react-icons/fa'

export default class Community extends Component {
  render() {
    return (
      <div>
          <h2>Community</h2>
            <p>
            <FaWheelchair className="icons" size={15}/>
            <h6>Mobility - User Review</h6>
            <p>Use the museum’s wheelchair map for the best route through the museum. Galleries are spacious, and the elevator to each floor was big enough for my chair. Great visit! </p>
            </p>
        
            <p>
            <FaBlind className="icons" size={15}/>
            <h6>Visual Impairment - User Review </h6>
            <p>My mother appreciated the large print labels and braille throughout. We attended a verbal description tour and had a wonderful visit. </p>
            </p>

            <p>
            <FaUniversalAccess className="icons" size={15}/>
            <h6>General - User Review</h6>
            <p>The Sensory Map is so helpful - we found a quiet spot to decompress after we passed through the busier galleries. Take a break when you need it for a long day at the museum. </p>
            </p>
            <p>
            <FaAccessibleIcon className="icons" size={15}/>
            <h6>Mobility - User Review</h6>
            <p>Always grateful for an institution that allows service dogs. </p>
            </p>
            <p>
            <FaDeaf className="icons" size={15}/>
            <h6>Hearing Impairment - User Review</h6>
            <p>I appreciated the captioning on the videos in the galleries, but wish the font had been bigger. </p>
            </p>

            <a href="/museumProfile"> <FaAngleLeft className="back" size={30}/></a>
      </div>
    )
  }
}
