import React, { useState } from 'react';
import './style_pt.css';

function User() {
  const [perfil, setPerfil] = useState({
    nombre: "usuario1",
    correo: "usuario@example.com",
    direccion: "Guadalajara, Jalisco",
  });

  const [historial] = useState([
    { id: 1, producto: "Camiseta negra con estampado", precio: 250 },
    { id: 2, producto: "Aretes de perlas", precio: 125 }
  ]);

  const handleChange = (e) => {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value
    });
  };

  const guardarCambios = () => {
    alert("Perfil actualizado correctamente");
  };

  return (
  <section>
    <div className="container">
      <h2 className="log-h2">Perfil de Usuario</h2>
			  <form>
		  <label htmlFor="nombre">Nombre de usuario:</label>
		  <input 
			id="nombre" name="nombre" type="text" value={perfil.nombre} onChange={handleChange}/><br />

		  <label htmlFor="correo">Correo electrónico:</label>
		  <input id="correo" name="correo" type="email" value={perfil.correo} onChange={handleChange}/><br />

		  <label htmlFor="direccion">Dirección:</label>
		  <input id="direccion" name="direccion" type="text" value={perfil.direccion} onChange={handleChange}/><br />

		  <button
		  className="btn-produc"
		  type="button" onClick={guardarCambios}>
			Guardar cambios
		  </button>
		</form>
	</div>

	<div className="carro-container">
		<h3 className="log-h3">Historial de compras</h3>
      <ul>
        {historial.map((item) => (
          <li key={item.id}>
            {item.producto} - ${item.precio} MXN
          </li>
        ))}
      </ul>
    </div>
	</section>
  );
}

export default User;