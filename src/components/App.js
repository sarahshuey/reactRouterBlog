import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    let formStyle={
      'height': '150px',
      'padding':' 20px',
      'backgroundColor': '#93b5ea',
      'color':'white',
      'text-align': 'center',
      'margin': '0 auto',
    }
    return (
      <div className="App">
        <div className="App-header" style={formStyle}>
          <h2>Welcome to the Blog</h2>
          <p>
          To start head to the Create Post page!
        </p>
      </div>
      </div>
    );
  }
}

export default App;
