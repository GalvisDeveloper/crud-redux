
import React from 'react';
import './Objetivo';

const Objetivo = ({ obj }) => {
    return (
        <tr>
            <td>{obj.anio}</td>
            <td>{obj.codigo}</td>
            <td>{obj.descripcion}</td>
            <td>
                <button type="button" className="btn btn-danger">
                    Borrar Objetivo
                    </button>
                <button type="button" className="btn btn-default">
                    Editar Objetivo
                    </button>
            </td>
        </tr>
    );
}

export default Objetivo;
