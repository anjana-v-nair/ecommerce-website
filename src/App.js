import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component.jsx';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props)
  return(
  <div>
    <ul>
      <li><Link to={`${props.match.url}/14`}>Details Page 14</Link></li>
      <li><Link to={`${props.match.url}/15`}>Details Page 15</Link></li>
      <li><Link to={`${props.match.url}/16`}>Details Page 16</Link></li>
      <li><Link to={`${props.match.url}/17`}>Details Page 17</Link></li>
      <li><Link to={`${props.match.url}/18`}>Details Page 18</Link></li>
      <h1>Hats Page</h1>
    </ul>

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
