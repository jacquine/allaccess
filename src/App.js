import React , {Component} from 'react';
import './App.css';
import Header from './components/header/header.js';
import Menu from './components/menu/Menu.js';

class App extends Component {
  render() {
    return(
      <div>
        <Menu />
      </div>

    );
  }

}

export default App;
