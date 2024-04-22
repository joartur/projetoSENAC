import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Box from '../components/box/Box';
import Calendario from '../Calendario';

const HomePage = () => {
  return (
    <Layout>
      <Header title="Página Inicial" description="Bem-vindo!" />
      <main>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
          }}
        >
          <Box title="Horas Produzidas (SIG)" description="106 Horas" type="box" />
          <Box title="Horas de Serviço Educacional" description="72 Horas" type="box" />
          <Box title="Total de Horas Cadastradas " description="178 Horas" type="box" />
          <Box title="Saldo de Horas" description="2 Horas" type="alert" />
        </div>
        <br />

        <div>
          <h1>Calendário com Mensagens</h1>
          <Calendario />
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
