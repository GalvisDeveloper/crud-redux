

import React, { Component } from 'react';
import "./Nav.css";
import logo from "../img/logo.PNG";
import { Link } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    accionarComponente() {
        this.props.nombrePath(window.location.pathname);
    }

    render() {
        return (
            <div className="container" >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
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
                                    <Link to="">Inicio</Link> {/*En construccion*/}
                                    <Link to="">Servicios</Link> {/*En construccion*/}
                                    <Link to="">Nuestro Personal</Link> {/*En construccion*/}
                                    <Link to="/objetivos" > PALANCAS Y OBJETIVOS </Link>
                                    <Link to="">Ayuda</Link> {/*En construccion*/}
                                </div>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Menu;
