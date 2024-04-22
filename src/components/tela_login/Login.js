// src/components/Login.js
import React, { useState } from 'react';
import './login.css';
import logo from "../../image/logo_senac.png"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione aqui a lógica de autenticação (pode ser um chamada à API, etc.)
    console.log('Login realizado com sucesso!');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo da Empresa" className="logo" />
      <p>Controle de Atividades e Serviços Educacionais</p>
      <form>
        <div className="input-group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
