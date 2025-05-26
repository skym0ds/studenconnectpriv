import React from 'react';
import '../../styles/dashboard/sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onSelect("buscar")}>Buscar asesorías</li>
        <li onClick={() => onSelect("crear")}>Crear asesorías</li>
        <li onClick={() => onSelect("recursos")}>Recursos</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
