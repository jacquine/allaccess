import React, { Component } from 'react'
import { FaSuperscript } from 'react-icons/fa';
import './footer2.css';
import Community from '../community/community.js'
import Photos from '../photos/photos.js'
import Directions from '../directions/directions.js'

export default class Footer2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selection: 'photos'
        };
    }

    handleClick = (e) => {
        this.setState({
            selection: e
        })
        
    }

    render() {
        return (
        <div className="footer">
            <a href="/photos"><button className="button b1" onClick = {() => {this.handleClick("photos")}}>Photos</button></a>
            <a href="/directions"><button className="button b2" onClick = {() => {this.handleClick("go")}}>Go</button></a>
            <a href="/community"><button className="button b3" onClick = {() => {this.handleClick("community")}}>Community</button></a>
        </div>
        )
    }
}
