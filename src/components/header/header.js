import React, {Component} from 'react'
import {FaVolumeUp} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
import './header.css'


export default class Header extends Component {

    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div>
                <a href="/home"><h1 className="name">ALL ACCESS!</h1></a>
                <FaVolumeUp className="audio" size={30}/>
                <FaPlus className="zoom" size={20}/>
                <FaMinus className="zout" size={20}/>
            </div>

        )

    }


}
