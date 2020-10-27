

import React, { useState } from 'react';
import './styles/CrearObjetivoPalanca.css';
import uniqid from "uniqid";
import datos from '../data';
import ObjetivoPalanca from './ObjetivoPalanca';
import { Link } from 'react-router-dom';

const CrearObjetivoPalanca = () => {

    // seleccion del año
    const arreglo = () => {
        var numeros = [];
        for (let index = 2000; index < 2101; index++) {
            numeros.push(index);
        }
        return numeros;
    }

    const [anios] = useState(arreglo());

    // valores de los inputs
    const [anio, setAnio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState('');
    const [data, setData] = useState(datos);

    // // valores que recibe el formulario
    const [values, setValues] = useState([{
        values: {
            anio: '',
            tipo: '',
            descripcion: '',
        }
    }]);

    const anioChange = (e) => {
        console.log('Seleccion: ' + e.target.value);
        setAnio(e.target.value);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setData(d => [...data, d]);
    // }

    const handleDescripcion = (e) => {
        setDescripcion(e.target.value);
    }

    return (

        <div className="crearObjetivo">
            <form >
                <div className="form-group">
                    <ObjetivoPalanca setTipo={setTipo} />
                </div>
                <div className="form-group">
                    <label htmlFor="anio">Elige el año</label>
                    <select
                        value={anio}
                        name="anio"
                        id="anio"
                        onChange={anioChange}
                    >
                        {
                            anios.map(a =>
                                <option
                                    value={a}
                                    key={uniqid()}
                                >
                                    {a}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="codigo"
                        value={datos[datos.length - 1].codigo + 1}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="descripcion"
                        placeholder="Insertar Descripcion"
                        onChange={handleDescripcion}
                        value={descripcion}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="codigo"
                        value={tipo}
                        disabled
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                        Añadir
                    </button>
                    <Link to="/objetivos-palancas" className="btn btn-default" type="button">
                        Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );

}

export default CrearObjetivoPalanca;