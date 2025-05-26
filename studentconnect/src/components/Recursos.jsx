import React, { useEffect, useState } from 'react';
import {
  obtenerRecursos,
  crearRecurso,
  actualizarRecurso,
  eliminarRecurso,
} from '../services/recursoService';
import '../styles/components/Recursos.css';

const Recursos = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [recursos, setRecursos] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    autor: '',
    link: '',
    tipo: '',
    fechaSubida: '',
  });
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    obtenerRecursos().then((res) => setRecursos(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editando !== null) {
      await actualizarRecurso(editando, form);
    } else {
      await crearRecurso(form);
    }
    setForm({ nombre: '', autor: '', link: '', tipo: '', fechaSubida: '' });
    setMostrarForm(false);
    setEditando(null);
    const res = await obtenerRecursos();
    setRecursos(res.data);
  };

  const handleEditar = (recurso) => {
    setForm(recurso);
    setEditando(recurso.id);
    setMostrarForm(true);
  };

  const handleEliminar = async (id) => {
    await eliminarRecurso(id);
    const res = await obtenerRecursos();
    setRecursos(res.data);
  };

  return (
    <div className="recursos-container">
      <button onClick={() => {
        setMostrarForm(!mostrarForm);
        setForm({ nombre: '', autor: '', link: '', tipo: '', fechaSubida: '' });
        setEditando(null);
      }}>
        {mostrarForm ? 'Cancelar' : 'Agregar nuevo recurso'}
      </button>

      {mostrarForm && (
        <form onSubmit={handleSubmit} className="formulario-recurso">
          <input name="nombre" placeholder="Nombre del recurso" value={form.nombre} onChange={handleChange} required />
          <input name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} required />
          <input name="link" placeholder="Enlace del recurso" value={form.link} onChange={handleChange} required />
          <input name="tipo" placeholder="Tipo de recurso (PDF, video, etc.)" value={form.tipo} onChange={handleChange} required />
          <input type="date" name="fechaSubida" value={form.fechaSubida} onChange={handleChange} required />
          <button type="submit">{editando ? 'Actualizar' : 'Agregar'}</button>
        </form>
      )}

      <ul className="lista-recursos">
        {recursos.map((r) => (
          <li key={r.id}>
            <strong>{r.nombre}</strong> — {r.tipo}
            <br />
            Por: {r.autor} | Subido: {r.fechaSubida}
            <br />
            <a href={r.link} target="_blank" rel="noopener noreferrer">Ver recurso</a>
            <br />
            <button onClick={() => handleEditar(r)}>Editar</button>
            <button onClick={() => handleEliminar(r.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recursos;
