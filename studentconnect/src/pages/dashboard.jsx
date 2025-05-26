import React, { useState } from 'react';
import NavBar from '../components/dashboard/navbar';
import Sidebar from '../components/dashboard/sidebar';
import '../styles/dashboard/dashboard.css';
import BuscarAsesorias from '../components/BuscarAsesorias';
import CrearAsesoria from '../components/CrearAsesoria';
import Recursos from '../components/Recursos';

const Dashboard = () => {
  const [seccionActiva, setSeccionActiva] = useState("buscar");

  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'buscar':
        return <BuscarAsesorias />;
      case 'crear':
        return <CrearAsesoria />;
      case 'recursos':
        return <Recursos />;
      default:
        return <BuscarAsesorias />;
    }
  };

  return (
    <div className="dashboard-container">
        <div className="dashboard-navbar">
            <NavBar />
            </div>
      <div className="dashboard-content">
        <Sidebar onSelect={setSeccionActiva} />
        <div className="main-section">{renderSeccion()}</div>
      </div>
    </div>
  );
};

export default Dashboard;