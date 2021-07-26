import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/navBar';
import CargarMutantesView from "./components/CargarMutantesView/container";
import DetectorDeMutantesView from "./components/DectectorDeMutantesView/container";
import MisMutantes from "./components/MisMutantesView/container";

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className={"title"}>
          Magneto web
        </h1>  
        <div className={"containerBody"}>
          <NavBar />   
          <Switch>
            <Route path='/'>
              <CargarMutantesView />
            </Route>
            <Route path='/cargarMutantes'>
              <CargarMutantesView />
            </Route>
            <Route path='/dectector-de-mutantes'>
              <DetectorDeMutantesView/>
            </Route>
            <Route path='/mis-mutantes'>
              <MisMutantes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
