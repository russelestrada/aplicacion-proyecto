import React, { useState } from 'react';
import './style_pt.css';

function Deseos() {
  const [deseos, setDeseos] = useState([]);

  const agregarDeseo = (producto) => {
    setDeseos([...deseos, producto]);
  };
  
  const eliminarDeseo = (index) => {
    const nuevaLista = deseos.filter((_, i) => i !== index);
    setDeseos(nuevaLista);
  };

  const productosSimulados = [
    {
      nombre: "Camiseta negra con estampado",
      precio: 250,
      imagen: "/imagenes/camiseta1.jpg"
    },
	{
      nombre: "Aretes de perlas",
      precio: 125,
      imagen: "/imagenes/joya3.jpg"
    },
	{
      nombre: "Camiseta blanca con estampado discreto",
      precio: 250,
      imagen: "/imagenes/camiseta2.jpg"
    },
	{
      nombre: "Pantalon de mezclilla para caballero",
      precio: 450,
      imagen: "/imagenes/pantalon2.jpg"
    },
    {
      nombre: "Pulsera con incrustaciones",
      precio: 150,
      imagen: "/imagenes/joya2.jpg"
    },
    {
      nombre: "Figura de acción vaquero fantasma",
      precio: 90,
      imagen: "/imagenes/toy3.jpg"
    }
  ];

  return (
    <section id="deseos">
      <div className="container">
        <h2>Mi lista de deseos</h2>

        <div className="carro-container">
          {productosSimulados.map((p, index) => (
            <button
			className="btn-car"
			key={index} onClick={() => agregarDeseo(p)}>
              Agregar {p.nombre}
            </button>
          ))}
        </div>

        <ul>
          {deseos.map((item, index) => (
            <li key={index} className="deseos-item">
              <img src={item.imagen} alt={item.nombre} />
              <div>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio} MXN</p>
              </div>
			  <button className="btn-des">
                  Agregar al carrito
              </button>
              <button
                className="btn-des"
                onClick={() => eliminarDeseo(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Deseos;