import React from 'react';
import {
   Link
  } from "react-router-dom";
import './navBar.css'

function NavBar() {
    return (
        <section className='navBarContainer'>
            <Link to="/cargarMutantes" className="links">
                Cargar Mutantes
            </Link>
            <Link to="/dectector-de-mutantes" className="links">
                Dectector de mutantes
            </Link>
            <Link to="/mis-mutantes" className="links">
                Mis mutantes
            </Link>
        </section>    
    )
}

export default NavBar;
