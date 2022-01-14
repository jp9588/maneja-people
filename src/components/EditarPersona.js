import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarPersona, eliminarPersona } from '../actions/personas';
import { useForm } from '../hooks/useForm';

export const EditarPersona = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ formValues, handleInputChange ] = useForm({
		nombre: '',
		apellidoP: '',
		apellidoM: '',
		direccion: '',
		telefono: ''
	});
	const { nombre, apellidoP, apellidoM, direccion, telefono } = formValues;

	const handleEdit = (e) => {
		e.preventDefault();
		dispatch(editarPersona(personaActiva.id, formValues));

		history.push('/');
		window.location.reload(true);
	};

	const handleEliminar = (e) => {
		e.preventDefault();
		dispatch(eliminarPersona(personaActiva.id));
		history.push('/');
		window.location.reload(true);
	};
	const { personaActiva } = useSelector((state) => state.personas);
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-md-4" />

				<div className="col-md-4">
					<form method="POST" onSubmit={handleEdit}>
						<div className="form-group">
							<label>Nombre:{personaActiva.nombre}</label>
							<input
								type="text"
								className="form-control"
								id="nombreUsuario"
								name="nombre"
								onChange={handleInputChange}
								value={nombre}
								placeholder="El nuevo nombre"
								required
								pattern="^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
							/>
						</div>
						<div className="form-group">
							<label>Apellido Paterno:{personaActiva.apellidoP} </label>
							<input
								type="text"
								className="form-control"
								id="apellidoP"
								name="apellidoP"
								onChange={handleInputChange}
								value={apellidoP}
								placeholder="El nuevo Apellido"
								required
								pattern="[A-Za-z]{1,25}"
							/>
						</div>
						<div className="form-group">
							<label>Apellido Materno:{personaActiva.apellidoM}</label>
							<input
								type="text"
								className="form-control"
								id="apellidoM"
								name="apellidoM"
								onChange={handleInputChange}
								value={apellidoM}
								placeholder="El nuevo apellido"
								required
								pattern="[A-Za-z]{1,25}"
							/>
						</div>
						<div className="form-group">
							<label>Direccion: {personaActiva.direccion}</label>
							<input
								type="text"
								className="form-control"
								id="direccion"
								name="direccion"
								onChange={handleInputChange}
								value={direccion}
								placeholder="La nueva direccion"
								required
								pattern="^[#.0-9a-zA-Z\s,-]+$"
							/>
						</div>
						<div className="form-group">
							<label>Telefono: {personaActiva.telefono}</label>
							<input
								type="tel"
								className="form-control"
								id="telefono"
								name="telefono"
								onChange={handleInputChange}
								value={telefono}
								placeholder="El nuevo telefono"
								required
								pattern="[0-9]{10}"
							/>
						</div>
						<br />

						<button type="submit" className="btn btn-success mx-2 mt-2">
							Guardar Cambios
						</button>
						<button type="button" onClick={handleEliminar} className="btn btn-danger  mx-2 mt-2">
							Eliminar Persona
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
