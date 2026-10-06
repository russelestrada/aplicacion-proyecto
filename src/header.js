import React from 'react';
import './style_pt.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/header">
		 <img src="/imagenes/logo.png" alt="Logo de la tienda" className="logo-img" />
        </a>
        <h1 id="titulo-principal">Aplicación móvil</h1>
      </div>
	  
      <div className="head">
        <a href="/carrito" className="carrito" aria-label="Carrito de compras">🛒</a>
        <input type="search" placeholder="Busca tu producto" />
        <a href="/login" className="login" aria-label="Iniciar sesión">
		<img src="/imagenes/login.jpg" alt="Icono de usuario" className="login-img" />
        </a>
      </div>
    </header>
  );
}

export default Header;