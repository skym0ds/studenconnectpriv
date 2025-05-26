import axios from 'axios';

const API = 'http://localhost:4000/api/recursos';

export const obtenerRecursos = () => axios.get(API);
export const crearRecurso = (data) => axios.post(API, data);
export const actualizarRecurso = (id, data) => axios.put(`${API}/${id}`, data);
export const eliminarRecurso = (id) => axios.delete(`${API}/${id}`);
