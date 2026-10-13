import React from 'react';
import Header from './header';
import Ropa from './ropa';
import Mueble from './mueble';
import Toys from './toys';
import Joya from './joya';
import Carrito from './carrito';
import User from './user';
import Footer from './footer';
import './style_pt.css';

function App() {
  return (
    <div>
		<Header />
		<Ropa />
		<Mueble />
		<Toys />
		<Joya />
		<Carrito />
		<User />
		<Footer />
    </div>
  );
}

export default App;
