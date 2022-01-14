import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPersonaActiva } from '../actions/personas';
import '../styles/styles.css';

const Persona = ({ id, nombre, apellidoP, apellidoM, direccion, telefono }) => {
	const dispatch = useDispatch();
	const handleEdit = () => {
		dispatch(setPersonaActiva({ id, nombre, apellidoP, apellidoM, direccion, telefono }));
	};

	return (
		<tr className="persona-valores">
			<td>{nombre}</td>
			<td>{apellidoP}</td>
			<td>{apellidoM}</td>
			<td>{direccion}</td>
			<td>{telefono}</td>
			<td>
				<Link to="/editar-persona">
					<button onClick={handleEdit} type="submit" className="btn btn-info">
						Editar
					</button>
				</Link>
			</td>
		</tr>
	);
};

export default Persona;
