import React, { Component } from 'react';
import './App.css';

import SideBar from './components/sidebar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
      </div>
    );
  }
}

export default App;
