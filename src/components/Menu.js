

import React, { Component } from 'react';
import "./styles/Menu.css";
import logo from "../img/logo.PNG";
import { Link } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container" >
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <div className="navegacion">
                                    <Link to="/home">Inicio</Link> {/*En construccion*/}
                                    <Link to="/enConstruccion">Servicios</Link> {/*En construccion*/}
                                    <Link to="/enConstruccion">Nuestro Personal</Link> {/*En construccion*/}
                                    <Link to="/crearObjetivo-Palanca" > PALANCAS Y OBJETIVOS </Link>
                                    <Link to="/enConstruccion">Ayuda</Link> {/*En construccion*/}
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Menu;
