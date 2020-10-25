

import React, { Component } from 'react';
import './CrearObjetivoPalanca.css';

class CrearObjetivoPalanca extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="crearObjetivo">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="codigo"
                            placeholder="Insertar Codigo"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            placeholder="Insertar Descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">
                            Añadir
                        </button>
                        <button className="btn btn-default" type="button">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CrearObjetivoPalanca;
