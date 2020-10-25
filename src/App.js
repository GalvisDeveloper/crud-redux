
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App";
import Menu from "./components/Menu.js";
import CrearObjetivoPalanca from './containers/CrearObjetivoPalanca.js';
import ObjetivoPalanca from './containers/ObjetivoPalanca';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: '',
    };

    this.nombrePath = this.nombrePath.bind(this);
  }

  nombrePath(pathname) {
    this.setState({
      pathname: pathname,
    });
  }

  render() {
    return (

      <Router>
        <div className="App">

          <Menu
            nombrePath={this.nombrePath}
            pathname={this.state.pathname}
          />

          <Switch>

            <Route
              path="/objetivos"
              exact
              component={() => <ObjetivoPalanca />}
            />
            <Route
              path="/crearObjetivo"
              exact
              component={() => <CrearObjetivoPalanca />}
            />
            <Route
              path="/editarObjetivo/:codigo"
              exact
              component={() => <ObjetivoPalanca />}
            />

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
