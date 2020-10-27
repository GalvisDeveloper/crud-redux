

import React, { useState } from 'react';
import './styles/ObjetivoPalanca.css';
import datos from '../data';
import Objetivo from '../components/Objetivo';
import { Link } from 'react-router-dom';

const ObjetivoPalanca = ({ setTipo }) => {

    const [buttonValue, setButtonValue] = useState('');

    const handleSubmitPalanca = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setButtonValue('Palanca');
        setTipo(() => buttonValue);
    }

    const handleSubmitObjetivo = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setButtonValue('Objetivo');
        setTipo(() => buttonValue);
    }

    return (
        <div className="container">

            <div className="close__action">
                <Link to="/home" id="btn__close" className="btn btn-warning">SALIR</Link>
            </div>

            <table className="table table-striped">
                <thead className="table__head">
                    <tr>
                        <th>Año</th>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {
                        datos.map(data => {
                            return (
                                <Objetivo key={data.codigo} obj={data} />
                            )
                        })
                    }
                </tbody>
            </table>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                CREAR
            </button>

            <input
                type="text"
                value={buttonValue}
                readOnly
            />

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">SEÑOR USUARIO</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Por favor, seleccione que desea crear
                        </div>
                        <div className="modal-footer">
                            <button type = "submit" onClick={handleSubmitPalanca} onSubmit={handleSubmitPalanca} className="btn btn-primary" data-dismiss="modal">Palanca</button>
                            <button onClick={handleSubmitObjetivo} className="btn btn-info" data-dismiss="modal">Objetivo</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default ObjetivoPalanca;
