import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ptBR from 'date-fns/locale/pt-BR';

import './Calendario.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [messages, setMessages] = useState({});

  // Adiciona uma mensagem de teste para o dia seguinte quando o componente é montado
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMessages({
      [tomorrow.toDateString()]: 'Mensagem de teste',
    });
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate.toLocaleDateString('pt-BR')); // Formata a data como DD/MM/AAAA
  };

  // Defina o domingo como o primeiro dia da semana (0 representa domingo)
  const weekStart = 0;

  return (
    <div className="calendario-container">
      <div className="calendar">
        <Calendar
          onChange={handleDateChange}
          value={date}
          locale={ptBR}
          firstDayOfWeek={weekStart} // Defina o primeiro dia da semana como domingo
          formatMonthYear={(locale, currentDate) => `${currentDate.toLocaleDateString(locale, { month: 'long' })} ${currentDate.getFullYear()}`}
          tileClassName={({ date }) => {
            const dateString = date.toDateString();
            return messages[dateString] ? 'has-message' : '';
          }}
        />
      </div>
      <div className="messages">
        <h2>Registros do dia: {selectedDate}</h2> {/* Exibe a data selecionada */}
        <table className="custom-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Tipo</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {/* Aqui você pode adicionar as linhas da tabela com os dados relevantes */}
            {/* Por exemplo: */}
            <tr>
              <td className="blue-text">Reunião</td>
              <td>Agendada</td>
              <td>Pendente</td>
            </tr>
            {/* Adicione mais linhas conforme necessário */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendario;
