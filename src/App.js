import React from 'react';
import Header from './header';
import Promo from './promociones';
import Catalogo from './catalogo';
import Opinion from './opiniones';
import Footer from './footer';
import './style_pt.css';

function App() {
  return (
    <div>
      <Header />
	  <Promo />
      <Catalogo />
	  <Opinion />
      <Footer />
    </div>
  );
}

export default App;
