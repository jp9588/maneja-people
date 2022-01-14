import axios from 'axios';
import Swal from 'sweetalert2';
import { types } from '../types/types';

const cargaPersonas = (personas) => {
	return {
		type: types.mostrarTodas,
		payload: personas
	};
};

export const cargandoPersonas = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`http://localhost:5000/api/personas/buscar-todas`);
			//console.log(data);
			dispatch(cargaPersonas(data.personas));
		} catch (error) {
			console.log(error);
		}
	};
};

export const setPersonaActiva = (persona) => {
	return {
		type: types.personaActiva,
		payload: persona
	};
};
export const salvarPersona = (persona) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`http://localhost:5000/api/persona/crear`, persona);
			dispatch(guardarNuevaPersona(persona));
		} catch (error) {
			console.log(error);
		}
	};
};
const guardarNuevaPersona = (persona) => {
	return {
		type: types.personaGuardar,
		payload: persona
	};
};

export const editarPersona = (id, persona) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.put(`http://localhost:5000/api/persona/editar/${id}`, persona);
		} catch (error) {
			console.log(error);
		}
	};
};

export const eliminarPersona = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(`http://localhost:5000/api/persona/eliminar/${id}`);
		} catch (error) {
			console.log(error);
		}
	};
};

const almacenaBusqueda = (personas) => {
	return {
		type: types.buscarPersonas,
		payload: personas
	};
};

export const buscarPersonas = (criterio) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`http://localhost:5000/api/persona/buscar/${criterio}`);

			if (!data.success) {
				return Swal.fire('Error', data.msg, 'error');
			}
			dispatch(almacenaBusqueda(data.busqueda));
		} catch (error) {
			console.log(error);
		}
	};
};
