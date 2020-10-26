

import React, { Component } from 'react';
import './CrearObjetivoPalanca.css';
import uniqid from "uniqid";
class CrearObjetivoPalanca extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anios: this.arreglo(),
        };
    }

    arreglo() {
        var numeros = [];
        for (let index = 1900; index < 2101; index++) {
            numeros.push(index);
        }
        return numeros;
    }

    render() {

        const { anios } = this.state;

        return (
            <div className="crearObjetivo">
                <form>
                    <div className="form-group">
                        <label htmlFor="anio">Elige el año</label>
                        <select name="anio" id="anio">
                            {anios.map(a => <option key={uniqid()}>{a}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="codigo"
                            placeholder="Insertar Codigo"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            placeholder="Insertar Descripcion"
                            required
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
