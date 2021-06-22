
import { Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import Home from './components/Home/Home.jsx'
import Turismo from './components/ActTurForm/ActTurForm'
import Landing from './components/Landing/Landing'
import Detalle from './components/Detalle/Detalle'
import navBar from './components/NavBar/navBar'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={navBar}/>
      <Route exact path="/home/detalles/:idPais" component={navBar}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/home/crear" component={navBar} />
      <Route exact path="/home/crear" component={Turismo} />
      <Route exact path="/home/detalles/:idPais" component={Detalle}/>
    </div>
  );
}

export default App;
