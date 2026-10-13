import React from 'react';
import './style_pt.css';

function Ropa () {
	return (
		<section id="catalogo">
		<h2>ROPA</h2>
		<div className="container">
		<a href="/mueble" className="btn-produc">MOBILIARIO</a>
		<a href="/toys" className="btn-produc">JUGUETES</a>
		<a href="/joya" className="btn-produc">ACCESORIOS</a>
		</div>
		
		<div className="container">
		<div className="productos">
          <a href="/ropa">
		  <img src="/imagenes/camiseta1.jpg" alt="Camiseta negra con estampado en exhibición" className="tienda-img" />
          </a>
		<p>Camiseta de color negro con estampado</p>
		<p>$250MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/ropa">
		  <img src="/imagenes/camiseta2.jpg" alt="Camiseta blanca con estampado discreto en exhibición" className="tienda-img" />
          </a>
		<p>Camiseta de color blanco con estampado discreto</p>
		<p>$250MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/ropa">
		  <img src="/imagenes/pantalon1.jpg" alt="Pantalon color vino en exhibición" className="tienda-img" />
          </a>
		<p>Pantalon de color vino para caballero</p>
		<p>$ 450MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/ropa">
		  <img src="/imagenes/pantalon2.jpg" alt="Pantalon de mezclilla" className="tienda-img" />
          </a>
		<p>Pantalon de mezclilla para caballero</p>
		<p>$ 450MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/ropa">
		  <img src="/imagenes/sueter1.jpg" alt="Sueter de color rojo en exhibición" className="tienda-img" />
          </a>
		<p>Sueter de color rojo</p>
		<p>$400MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		<div className="productos">
          <a href="/ropa">
		  <img src="/imagenes/sueter2.jpg" alt="Sueter de color gris en exhibición" className="tienda-img" />
          </a>
		<p>Sueter de color gris para caballero</p>
		<p>$600MXN</p>
		<a href="/carrito" className="btn-carrito">Agregar al carrito</a>
		</div>
		
		</div>
		</section>
	);
}

export default Ropa;