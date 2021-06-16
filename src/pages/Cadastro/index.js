import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/three.png';

export default function Cadastro() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Pet Plus" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e acesse todas as informações do seu Pet.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#d37a37" />
            Fazer logon
          </Link>
        </section>

        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" required/>
          <input type="password" placeholder="Confirmar  Senha" required/>

          <Link to="/cadastroadicional">
          <button className="button" type="submit">Prosseguir</button>
          </Link>
        </form>
      </div>
    </div>
  )
}