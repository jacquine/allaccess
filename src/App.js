import React , {Component} from 'react';
import './App.css';
import Header from './components/header/header.js';
import Menu from './components/menu/menu.js';

class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Menu />
      </div>

    );
  }

}

export default App;
