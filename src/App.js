import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css'; 
import Cover from './components/Cover';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
      <div>
          <Cover />
          <Info />
      </div>
    );
  }
}

export default App;
