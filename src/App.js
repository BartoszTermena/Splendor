import React, { Component } from 'react';
import TokenArea from './components/TokenArea';
import CardArea from './components/CardArea'

class App extends Component {
  render() {
    return (
       <div className="row">
         <TokenArea />
         <CardArea />
      </div>
    );
  }
}

export default App;
