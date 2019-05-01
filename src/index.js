import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import DropdownMenu from '../src/components/dropdownmenu/dropdownmenu'
import Result from './components/result/Result.js';
import Header from '../src/components/header/header.js';
import MuseumProfile from '../src/components/museumProfile/museumProfile.js'
import Community from '../src/components/community/community.js'
import Photos from '../src/components/photos/photos'
import Info from '../src/components/info/info'
import Directions from '../src/components/directions/directions'

ReactDOM.render(
    <Router history={history}>
        <Header />
        <Switch>
            <Route path="/home" component={App}/>
            <Route path="/result" component={Result}/>
            <Route path="/museumprofile" component={MuseumProfile}/>
            <Route path="/info" component={Info}/>
            <Route path="/photos" component={Photos}/> 
            {/* <Route path="/go" component={Go}/> */}
            <Route path="/community" component={Community}/>
            <Route path="/directions" component={Directions}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
