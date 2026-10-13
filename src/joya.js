import React from 'react';
import './style_pt.css';

function Joya () {
	return (
		<section id="catalogo">
		<h2>ACCESORIOS</h2>
		<div className="container">
		<a href="/ropa" className="btn-produc">ROPA</a>
		<a href="/mueble" className="btn-produc">MOBILIARIO</a>
		<a href="/toys" className="btn-produc">JUGUETES</a>
		</div>
		
		<div className="container">
		<div className="productos">
          <a href="/joya">
		  <img src="/imagenes/joya1.jpg" alt="Anillos de oro para pareja en exhibición" className="tienda-img" />
          </a>
		<p>Anillos de oro para pereja</p>
		<p>$400MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/joya">
		  <img src="/imagenes/joya2.jpg" alt="Pulsera con incrustaciones en exhibición" className="tienda-img" />
          </a>
		<p>Pulsera con incrutaciones</p>
		<p>$150MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/joya">
		  <img src="/imagenes/joya3.jpg" alt="Aretes de perlas en exhibición" className="tienda-img" />
          </a>
		<p>Aretes de perlas</p>
		<p>$125MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/joya">
		  <img src="/imagenes/joya4.jpg" alt="Collar de oro con diseño de hojas en exhibición" className="tienda-img" />
          </a>
		<p>Collar de oro con diseño de hojas</p>
		<p>$250MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		</div>
		</section>
	);
}

export default Joya;