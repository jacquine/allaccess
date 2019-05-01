import React, {Component} from 'react'
import './menu.css'

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selection: 'mobility'
        };

    }

    handleClick = (e) => {
        this.setState({
            selection: e
        })
        console.log(this.state.selection);
    }

    render() {
    return (
        <div>
        <div className="welcome">
            <h1>Welcome to NYC!</h1>
            <img className="picture" src={require("../../assets/main-nyc.png")} alt="new york city outline"/>
        </div>
        <div className="buttons_page">
            <div className="button-row">
                <button className="button buttonAll" onClick = {() => {this.handleClick("all")}}>ALL</button>
                <button className="button buttonMobility" onClick = {() => {this.handleClick("mobility")}}>MOBILITY</button>
            </div>
            <div className="button-row">
                <button className="button buttonVisual" onClick = {() => {this.handleClick("visual")}}>VISUALLY IMPAIRED</button>
                <button className="button buttonHearing" onClick = {() => {this.handleClick("hearing")}}>HEARING IMPAIRED</button>
            </div>
            <div className="button-row">
               <a href="/result"><button className="button" onClick="findMuseums()"> FIND MUSEUMS! </button></a>

            </div>
        </div>
        </div>
    )
    }
}
