import React from 'react';
import { useDispatch } from 'react-redux';
import { salvarPersona } from '../actions/personas';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const GuardarPersona = () => {
	const history = useHistory();
	const [ formValues, handleInputChange, reset ] = useForm({
		nombre: '',
		apellidoP: '',
		apellidoM: '',
		direccion: '',
		telefono: ''
	});

	const dispatch = useDispatch();

	const { nombre, apellidoP, apellidoM, direccion, telefono } = formValues;
	const handleGuardarPersona = (e) => {
		e.preventDefault();
		dispatch(salvarPersona(formValues));
		reset();
		history.push('/');
		window.location.reload(true);
	};

	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-md-4" />

				<div className="col-md-4">
					<form onSubmit={handleGuardarPersona}>
						<div className="form-group">
							<label for="nombre">Nombre</label>
							<input
								type="text"
								className="form-control"
								id="nombreUsuario"
								onChange={handleInputChange}
								value={nombre}
								name="nombre"
								placeholder="Tu Nombre"
								required
								pattern="[A-Za-z]{1,25}"
							/>
						</div>
						<div className="form-group">
							<label for="apellidoP">Apellido Paterno</label>
							<input
								type="text"
								className="form-control"
								id="apellidoP"
								name="apellidoP"
								onChange={handleInputChange}
								value={apellidoP}
								placeholder="Tu apellido Paterno"
								required
								pattern="[A-Za-z]{1,25}"
							/>
						</div>
						<div className="form-group">
							<label for="apellidoM">Apellido Materno</label>
							<input
								type="text"
								className="form-control"
								id="apellidoM"
								name="apellidoM"
								onChange={handleInputChange}
								value={apellidoM}
								placeholder="Tu apellido Materno"
								required
								pattern="[A-Za-z]{1,25}"
							/>
						</div>
						<div className="form-group">
							<label for="direccion">Direccion</label>
							<input
								type="text"
								className="form-control"
								id="direccion"
								name="direccion"
								onChange={handleInputChange}
								value={direccion}
								placeholder="Tu Direccion"
								required
								pattern="^[#.0-9a-zA-Z\s,-]+$"
							/>
						</div>
						<div className="form-group">
							<label for="telefono">Telefono</label>
							<input
								type="tel"
								className="form-control"
								id="telefono"
								name="telefono"
								onChange={handleInputChange}
								value={telefono}
								placeholder="Tu Telefono"
								required
								pattern="[0-9]{10}"
							/>
						</div>
						<br />
						<button type="submit" className="btn btn-success">
							Guardar Persona
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GuardarPersona;
