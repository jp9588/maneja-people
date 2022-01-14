import { types } from '../types/types';

const initialState = {
	lasPersonas: [
		// {
		// 	id: '1234jk',
		// 	nombre: 'Juan Pedro',
		// 	apellidoP: 'Rodriguez',
		// 	apellidoM: 'Camarena',
		// 	direccion: 'C #35',
		// 	telefono: '1234567890'
		// }
	],
	personaActiva: null
};

export const personaReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.mostrarTodas:
			return {
				...state,
				lasPersonas: [ ...action.payload ]
			};
		case types.personaActiva:
			return {
				...state,
				personaActiva: action.payload
			};
		case types.personaGuardar:
			return {
				...state,
				lasPersonas: [ ...state.lasPersonas, action.payload ]
			};
		case types.buscarPersonas:
			return {
				...state,
				lasPersonas: [ ...action.payload ]
			};

		default:
			return state;
	}
};
