import React from 'react';
import './style_pt.css';

function Toys () {
	return (
		<section id="catalogo">
		<h2>JUGUETES</h2>
		<div className="container">
		<a href="/ropa" className="btn-produc">ROPA</a>
		<a href="/mueble" className="btn-produc">MOBILIARIO</a>
		<a href="/joya" className="btn-produc">ACCESORIOS</a>
		</div>
		
		<div className="container">
		<div className="productos">
          <a href="/juguetes">
		  <img src="/imagenes/toy1.jpg" alt="Carreola para bebé de juguete en exhibición" className="tienda-img" />
          </a>
		<p>Carreola de juguete para bebé</p>
		<p>$400MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/juguetes">
		  <img src="/imagenes/toy2.jpg" alt="Perrito hecho de bloques de construcción en exhibición" className="tienda-img" />
          </a>
		<p>Bloques de construcción miniuatura modelo de perro</p>
		<p>$150MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/juguetes">
		  <img src="/imagenes/toy3.jpg" alt="Figura de acción vaquero fantasma en exhibición" className="tienda-img" />
          </a>
		<p>Figura de acción vaquero fantasma</p>
		<p>$90MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/juguetes">
		  <img src="/imagenes/toy4.jpg" alt="Vehículo de juguete con piloto de carreras en exhibición" className="tienda-img" />
          </a>
		<p>Vehículo color rojo con piloto de carreras</p>
		<p>$ 199MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		</div>
		</section>
	);
}

export default Toys;