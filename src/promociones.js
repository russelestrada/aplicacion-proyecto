import React from 'react';
import './style_pt.css';

function Promo () {
	return (
		<section id="promo">
		<div className="container">
			<a href="/promo">
			<img src="/imagenes/promo.jpg" alt="Artículos en promoción" className="imagen-promo" />
			</a>
			<h2>DESCUBRE NUESTRAS OFERTAS</h2>
			<p>Contamos con descuentos en diversos productos</p>
			<a href="/promo" className="btn-produc">VER MÁS</a>
		</div>
		</section>
	);
}

export default Promo;