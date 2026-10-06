import React from 'react';
import './style_pt.css';

function Catalogo() {
  return (
    <section id="catalogo">
      <h2>NUESTROS PRODUCTOS</h2>
      <div className="container">
        <div className="productos">
          <a href="/ropa">
		  <img src="/imagenes/ropa.jpg" alt="Ropa en exhibición" className="catalogo-img" />
          </a>
        <a href="/ropa" className="btn-produc">ROPA</a>
        </div>
		
		<div className="productos">
          <a href="/mobiliario">
		  <img src="/imagenes/escritorio.jpg" alt="Escritorio de madera y acero" className="catalogo-img" />
          </a>
        <a href="/mobiliario" className="btn-produc">MOBILIARIO</a>
        </div>
		
		<div className="productos">
          <a href="/juguetes">
		  <img src="/imagenes/juguetes.jpg" alt="Autos de juguete en exhibición" className="catalogo-img" />
          </a>
        <a href="/juguetes" className="btn-produc">JUGUETES</a>
        </div>
		
		<div className="productos">
          <a href="/accesorios">
		  <img src="/imagenes/accesorio.jpg" alt="Pulseras de oro" className="catalogo-img" />
          </a>
        <a href="/accesorios" className="btn-produc">ACCESORIOS</a>
        </div>
		
      </div>
    </section>
  );
}

export default Catalogo;