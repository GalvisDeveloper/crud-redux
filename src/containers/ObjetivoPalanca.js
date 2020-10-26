

import React, { Component } from 'react';
import { datos } from '../data';
import Objetivo from '../components/Objetivo';
// import uniqid from 'uniqid';
class ObjetivoPalanca extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tipo: datos.tipo,
        };
        console.log(this.state);
    }

    render() {

        // const { tipo } = this.state;

        return (
            <div className="container">
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
                                {/* {tipo.map(bt => <button key={uniqid()}>{bt}</button>)} */}
                                <button type="button" className="btn btn-info" >Objetivo</button>
                                <button type="button" className="btn btn-primary">Palanca</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ObjetivoPalanca;
