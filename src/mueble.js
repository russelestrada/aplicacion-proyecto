import React from 'react';
import './style_pt.css';

function Mueble () {
	return (
		<section id="catalogo">
		<h2>MOBILIARIO</h2>
		<div className="container">
		<a href="/ropa" className="btn-produc">ROPA</a>
		<a href="/toys" className="btn-produc">JUGUETES</a>
		<a href="/joya" className="btn-produc">ACCESORIOS</a>
		</div>
		
		<div className="container">
		<div className="productos">
          <a href="/mobiliario">
		  <img src="/imagenes/silla1.jpg" alt="Silla de oficina de color roja en exhibición" className="tienda-img" />
          </a>
		<p>Silla de oficina ergonómica de color rojo</p>
		<p>$ 750MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/mobiliario">
		  <img src="/imagenes/silla2.jpg" alt="Silla de oficina de color verde en exhibición" className="tienda-img" />
          </a>
		<p>Silla de oficina ergonómica de color verde</p>
		<p>$ 750MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/mobiliario">
		  <img src="/imagenes/silla3.jpg" alt="Silla de oficina de color negro en exhibición" className="tienda-img" />
          </a>
		<p>Silla de oficina ergonómica de color negro</p>
		<p>$670MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/mobiliario">
		  <img src="/imagenes/escritorio1.jpg" alt="Escritorio de metal y madera en exhibición" className="tienda-img" />
          </a>
		<p>Escritorio metalico con partes de madera</p>
		<p>$1600MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/mobiliario">
		  <img src="/imagenes/escritorio2.jpg" alt="Escritorio de madera con una laptop en exhibición" className="tienda-img" />
          </a>
		<p>Escritorio de madera</p>
		<p>$1600MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/mobiliario">
		  <img src="/imagenes/archivero.jpg" alt="Archivero metalico con cinco gavetas en exhibición" className="tienda-img" />
          </a>
		<p>Archivero metalico de 5 gavetas</p>
		<p>$ 800MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		
		</div>
		</section>
	);
}

export default Mueble;