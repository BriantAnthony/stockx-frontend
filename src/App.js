import React, { Component } from 'react';
import Header from './components/header';
import SubHeader from './components/subHeader';
import Grid from './components/grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Grid />
      </div>
    );
  }
}

export default App;
