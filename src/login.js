import React from 'react';
import './style_pt.css';

function Login() {
  return (
    <main>
      <section>
        <h2 className="log-h2">Login</h2>
        <p className="log-p">Inicia Sesión</p>
        <form>
          <ul>
            <li>
              <label htmlFor="mail"><b>Correo electrónico</b></label>
              <input type="email" id="mail" name="user_email" placeholder="ejemplo@correo.com" required />
            </li>
            <li>
              <label htmlFor="password"><b>Contraseña</b></label>
              <input type="password" id="password" name="password" placeholder="*****" required />
            </li>
          </ul>
          <button type="submit">Iniciar sesión</button>
        </form>
      </section>
    </main>
  );
}

export default Login;