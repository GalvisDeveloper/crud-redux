
import React, { Component } from 'react';
import './styles/Home.css';
class Home extends Component {

    render() {

        return (
            <div className="col-md-auto">
                <img id="img__home" src="https://bindiva.com/blog/wp-content/uploads/2019/03/importancia-de-la-administracion-en-las-empresas-bindiva-blog-2019.jpg" alt="" />
                <div className="centrado">
                    <h1>BIENVENIDO</h1>
                </div>
            </div>
        );
    }
}

export default Home;
