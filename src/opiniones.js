import React from 'react';
import './style_pt.css';

function Opinion () {
	return (
		<section id="opiniones">
		<div className="container">
			<a href="/opinion">
			</a>
			<h2>OPINIONES DE CLIENTES</h2>
				<blockquote>"Excelente calidad y precio"</blockquote>
				<blockquote>"Entregas rápidas y seguras"</blockquote>
				<blockquote>"Encontré justo lo que buscaba"</blockquote>
			<p>Calificación promedio: 4.6</p>
			<a href="/opinion" className="btn-opi">PUBLICA TU OPINIÓN</a>
		</div>
		</section>
	);
}

export default Opinion;