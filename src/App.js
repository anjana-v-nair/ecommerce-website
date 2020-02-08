import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props)
  return(
  <div>
    <h1>Hats Page</h1>
  </div>)
}
const HatsDetails = (props) => {
  console.log(props)
  return(
  <div>
    <h1>Hats Details: {props.match.params.hatnum}</h1>
  </div>)
}


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route  exact path='/hats' component={ HatsPage } />
      <Route  path='/hats/:hatnum' component={ HatsDetails } />
    </Switch>
    </div>
  );
}

export default App;
