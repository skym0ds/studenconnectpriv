import React, { useState } from 'react';
import '../styles/components/BuscarAsesorias.css';

const BuscarAsesorias = () => {
  const [search, setSearch] = useState('');
  const asesorias = [
    'Matemáticas Avanzadas',
    'Programación en React',
    'Base de Datos MySQL',
    'Física para Ingeniería',
    'Redacción de Tesis',
    'Como conectar backend con front',
    'Si yo puedo tu puedes',
    'Denos una oportunidad'
  ];

  const filtradas = asesorias.filter((a) => a.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="buscar-container">
      <input
        type="text"
        placeholder="Buscar asesoría..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtradas.map((a, idx) => (
          <li key={idx}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuscarAsesorias;
