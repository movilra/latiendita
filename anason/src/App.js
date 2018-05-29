import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="navbar/navbargrafico.jpg" width="1000" height="30" className="d-inline-block align-top" alt=""/>
        </a>
    </nav>


    <div className="container">
        <a className="navbar-brand" href="index.html">Anason</a>
        <img src="img/anason.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <li className="nav-item">
              <a className="nav-link" href="formas/userprofile.html">Configuración</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="formas/login.html">Ingresar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="formas/register.html">Registrar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="formas/cart.html">Orders</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Departamentos
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                <a className="dropdown-item" href="portafolio-categorias-col.html">Electrónicos</a>
                <a className="dropdown-item" href="portfolio-2-col.html">Celulares</a>
                <a className="dropdown-item" href="portfolio-3-col.html">TV y DVD's</a>
                <a className="dropdown-item" href="portfolio-4-col.html">Computación</a>
                <a className="dropdown-item" href="portfolio-item.html">Videojuegos</a>
                <a className="dropdown-item" href="portfolio-item.html">Hogar</a>
                <a className="dropdown-item" href="portfolio-item.html">Moda</a>
                <a className="dropdown-item" href="portfolio-item.html">Belleza</a>
                <a className="dropdown-item" href="portfolio-item.html">Salud</a>
                <a className="dropdown-item" href="portfolio-item.html">Juguetes</a>
                <a className="dropdown-item" href="portfolio-item.html">Bebes</a>
                <a className="dropdown-item" href="portfolio-item.html">Deportes</a>
                <a className="dropdown-item" href="portfolio-item.html">Electrodomésticos</a>
              </div>
            </li>

            <img src="img/anason.jpg" width="30" height="30" className="d-inline-block align-right" alt="" />

              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                <a className="dropdown-item" href="full-width.html">Full Width Page</a>
                <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
                <a className="dropdown-item" href="faq.html">FAQ</a>
                <a className="dropdown-item" href="404.html">404</a>
                <a className="dropdown-item" href="pricing.html">Pricing Table</a>
              </div>
          </ul>
        </div>
    </div>
  </div>







  )
}
}
    


export default App;
