import React, { useState } from 'react';
import './style_pt.css';

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

	const finalizarCompra = () => {
	alert (" Comprobante #12345, ¡Gracias por comprar! ")
	setCarrito([]); 
	};

  return (
  <section>
    <div className="carro-container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul className="carro-list">
          {carrito.map((p, index) => (
            <li key={index}>
              {p.nombre} - ${p.precio} MXN
              <button
			  className="btn-car"
			  onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <p className="carro-total">
        Total: ${carrito.reduce((acc, p) => acc + p.precio, 0)} MXN
      </p>
      <button
	  className="btn-com"
        disabled={carrito.length === 0} 
        onClick={finalizarCompra}
      >
        Comprar
      </button>

      <h2>Finalizar la compra</h2>
      <button 
	  className="btn-car"
	  onClick={() => agregarAlCarrito({ nombre: "Aretes de perlas", precio: 125 })}>
        Agregar aretes
      </button>
      <button
	  className="btn-car"
	  onClick={() => agregarAlCarrito({ nombre: "Camiseta negra con estampado", precio: 250 })}>
        Agregar camiseta negra
      </button>
    </div>
	</section>
  );
}

export default Carrito;