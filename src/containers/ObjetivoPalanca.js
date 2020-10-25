

import React, { Component } from 'react';
import { objetivos } from '../data';
import Objetivo from '../components/Objetivo';

class ObjetivoPalanca extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                            objetivos.map(obj => {
                                return (
                                    <Objetivo key={obj.codigo} obj={obj} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ObjetivoPalanca;
