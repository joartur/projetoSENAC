import React from 'react';
import { faCalendar, faBell, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Button from '../components/buttons/Button';
import ButtonFilter from '../components/buttons/ButtonFilter';
import Box from '../components/box/Box';
import Notification from '../components/notifications/Notification';
import NotificationTable from '../components/notifications/NotificationTable';
import TextInput from '../components/inputs/TextInput';
import DateInput from '../components/inputs/DateInput';
import TableSituation from '../components/table/TableSituation';
import ActionButton from '../components/table/ActionButton';
import BigInput from '../components/inputs/BigInput';
import NumberInput from '../components/inputs/numberInput';
import Table from '../components/table/Table';

const ComponentsPage = () => {
  return (
    <Layout>
        <Header title="Página de Componentes" description="Teste e use componentes nessa página!"/>
        <div>
            <div style={{
              marginBottom: '40px'
            }}>
            <Button title="Ler Mais" url="/" size="large" icon={faCalendar}/>
            <Button title="Ler Mais" url="/" size="medium"/>
            <Button title="Ler Mais" url="/" size="small"/>
            <ButtonFilter title="Filtros" url="" size="small" icon={faCalendar}/>
            <BigInput placeholder="Insira uma descrição!"/>
            <NumberInput />


            <Table />

            <select><option>Escolha:</option></select>
            <TextInput placeholder="Pesquise o Serviço Educacional pelo Título" icon={faMagnifyingGlass}/>
            <DateInput />
            <TableSituation title="Em Análise" type="analysis"/>
            <TableSituation title="Validado" type="validate"/>
            <TableSituation title="Parcialmente Validado" type="partial"/>
            <TableSituation title="Recusado" type="refused"/>
            <ActionButton icon={faTrash}/>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
            }}>
              <Box title="Horas Produzidas (SIG)" description="106 Horas" type="box"/>
              <Box title="Horas de Serviço Educacional" description="72 Horas" type="box"/>
              <Box title="Total de Horas Cadastradas " description="178 Horas" type="box"/>
              <Box title="Saldo de Horas" description="2 Horas" type="alert"/>
            </div>

            <div style={{
              marginBottom: '40px'
            }}>
            <NotificationTable>
              <Notification title="Seu Serviço Educacional foi Validado!" type="analysis" icon={faBell}/>
              <Notification title="Seu Serviço Educacional foi Validado!" type="validate" icon={faBell}/>
              <Notification title="Seu Serviço Educacional foi Validado!" type="partial" icon={faBell}/>
              <Notification title="Seu Serviço Educacional foi Validado!" type="refused" icon={faBell}/>
            </NotificationTable>
            </div>

            

        </div>
    </Layout>
  );
};

export default ComponentsPage;