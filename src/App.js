import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      meaningOfLife : 47
    }
  }
  handleChange = () =>
  {
    this.setState({meaningOfLife : this.state.meaningOfLife+1},
      () =>
    {
    console.log(this.state.meaningOfLife);

    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        { this.state.meaningOfLife }
        </p>
        <button onClick = { this.handleChange }>
        Update Number
        </button>
      </header>
    </div>
  );
}
}

export default App;
