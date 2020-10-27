
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App";

import Menu from "./components/Menu.js";
import CrearObjetivoPalanca from './containers/CrearObjetivoPalanca.js';
import ObjetivoPalanca from './containers/ObjetivoPalanca';
import Home from './components/Home';
import Building from './components/Building';
import NotFound from './components/NotFound';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: '/',
    };

    this.nombrePath = this.nombrePath.bind(this);
  }

  nombrePath(pathname) {
    this.setState({
      pathname: pathname,
    });
  }

  noMatch = this.useLocation;

  render() {

    return (

      <Router>
        <div className="App">

          <Menu
            nombrePath={this.nombrePath}
            pathname={this.state.pathname}
          />

          {/* <Redirect
            from="/"
            to="/home" /> */}

          <Switch>

            <Route
              path="/home"
              exact
              component={() => <Home />}
            />
            <Route
              path="/objetivos-palancas"
              exact
              component={() => <ObjetivoPalanca />}
            />
            <Route
              path="/crearObjetivo-Palanca/"
              exact
              component={() => <CrearObjetivoPalanca />}
            />
            <Route
              path="/editarObjetivo-Palanca/:codigo"
              exact
              component={() => <ObjetivoPalanca />}
            />
            <Route
              path="/enConstruccion/"
              exact
              component={() => <Building />}
            />
            <Route
              component={NotFound}
            />
          </Switch>

        </div>
      </Router >
    );
  }
}

export default App;
