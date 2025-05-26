import React, { useEffect, useState } from 'react';
import { crearAsesoria, obtenerAsesorias, actualizarAsesoria, eliminarAsesoria } from '../services/asesoriaService';
import '../styles/components/CrearAsesoria.css';

const CrearAsesoria = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [asesorias, setAsesorias] = useState([]);
  const [form, setForm] = useState({
    titulo: '',
    descripcion: '',
    autor: '',
    duracion: '',
    fechaInicio: '',
    fechaFin: '',
  });
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    obtenerAsesorias().then(res => setAsesorias(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editando !== null) {
      await actualizarAsesoria(editando, form);
    } else {
      await crearAsesoria(form);
    }
    setForm({ titulo: '', descripcion: '', autor: '', duracion: '', fechaInicio: '', fechaFin: '' });
    setMostrarForm(false);
    setEditando(null);
    const res = await obtenerAsesorias();
    setAsesorias(res.data);
  };

  const handleEditar = (asesoria) => {
    setForm(asesoria);
    setEditando(asesoria.id);
    setMostrarForm(true);
  };

  const handleEliminar = async (id) => {
    await eliminarAsesoria(id);
    const res = await obtenerAsesorias();
    setAsesorias(res.data);
  };

  return (
    <div className="crear-container">
      <button onClick={() => {
        setMostrarForm(!mostrarForm);
        setForm({ titulo: '', descripcion: '', autor: '', duracion: '', fechaInicio: '', fechaFin: '' });
        setEditando(null);
      }}>
        {mostrarForm ? 'Cancelar' : 'Crear nueva asesoría'}
      </button>

      {mostrarForm && (
        <form onSubmit={handleSubmit} className="formulario-asesoria">
          <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
          <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
          <input name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} required />
          <input name="duracion" placeholder="Duración" value={form.duracion} onChange={handleChange} required />
          <input type="date" name="fechaInicio" value={form.fechaInicio} onChange={handleChange} required />
          <input type="date" name="fechaFin" value={form.fechaFin} onChange={handleChange} required />
          <button type="submit">{editando ? 'Actualizar' : 'Guardar'}</button>
        </form>
      )}

      <h3>Mis asesorías</h3>
      <ul className="lista-asesorias">
        {asesorias.map((a) => (
          <li key={a.id}>
            <strong>{a.titulo}</strong> — {a.descripcion}
            <br />
            Autor: {a.autor} | Duración: {a.duracion}
            <br />
            {a.fechaInicio} - {a.fechaFin}
            <br />
            <button onClick={() => handleEditar(a)}>Editar</button>
            <button onClick={() => handleEliminar(a.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrearAsesoria;
