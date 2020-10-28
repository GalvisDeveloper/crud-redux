
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';

const NotFound = () => {



    return (
        <div>
            <h1 className="centrado">404-Not Found 😢</h1>
            <Link className="btn btn-success" to="/home">VOLVER A INICIO</Link>
        </div>
    );
}

export default NotFound;
