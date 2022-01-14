import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { buscarPersonas, cargandoPersonas } from '../actions/personas';
import { useForm } from '../hooks/useForm';
import Persona from './Persona';

const TablaPersonas = () => {
	const [ busqueda, setBusqueda ] = useState(false);
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(cargandoPersonas());
			setBusqueda(false);
		},
		[ dispatch, setBusqueda ]
	);
	const [ formValues, handleInputChange, reset ] = useForm({
		criterio: ''
	});
	const { criterio } = formValues;
	const { lasPersonas } = useSelector((state) => state.personas);
	const handleBusqueda = (e) => {
		e.preventDefault();
		dispatch(buscarPersonas(criterio));
		setBusqueda(true);
		reset();
	};
	const handleReload = () => {
		window.location.reload(true);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8" />
				<div className="col-md-4">
					<br />
					<form className="d-flex" onSubmit={handleBusqueda}>
						<input
							className="form-control me-2"
							name="criterio"
							value={criterio}
							onChange={handleInputChange}
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Buscar...
						</button>
					</form>
				</div>
			</div>
			<br />
			{busqueda && (
				<div className="container ">
					<p>Para volver a ver todas las personas! recarga la pagina...</p>
					<button className="btn btn-success mb-5" type="button" onClick={handleReload}>
						Recargar Pagina...
					</button>
				</div>
			)}
			<table className="table table-striped table-hover table-info">
				<thead>
					<tr>
						<th>Nombre(s)</th>
						<th>Apellido Paterno</th>
						<th>Apellido Materno</th>
						<th>Direccion</th>
						<th>Telefono</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{lasPersonas.map((persona) => {
						return (
							<Persona
								key={persona.id}
								id={persona.id}
								nombre={persona.nombre}
								apellidoP={persona.apellidoP}
								apellidoM={persona.apellidoM}
								direccion={persona.direccion}
								telefono={persona.telefono}
							/>
						);
					})}
					{/* <tr>
						<td>Juan Pedro</td>
						<td>Rodriguez</td>
						<td>Camarena</td>
						<td>C #35</td>
						<td>0987654321</td>
						<td>
							<Link to="/editar-persona">
								<button type="submit" className="btn btn-info">
									Editar
								</button>
							</Link>
						</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default TablaPersonas;
