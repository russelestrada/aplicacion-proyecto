import React from 'react';
import Header from './header';
import Deseos from './deseos';
import Notificacion from './notificacion';
import Ayuda from './ayuda';
import Footer from './footer';
import './style_pt.css';

function App() {
  return (
    <div>
		<Header />
		<Deseos />
		<Notificacion />
		<Ayuda />
		<Footer />
    </div>
  );
}

export default App;
