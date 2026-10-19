import React from 'react';
import './style_pt.css';

function Notificacion({ deseos = [] }) {
  return (
    <div className="notificacion">
      {deseos.length > 0 
        ? <p>¡Oferta especial disponible en tus productos!</p> 
        : <p>Descubre nuestras ofertas personalizadas.</p>}
    </div>
  );
}

export default Notificacion;