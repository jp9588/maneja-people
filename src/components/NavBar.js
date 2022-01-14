import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<nav className="navbar navbar-expand navbar-light bg-light">
						<ul className="nav navbar-nav">
							<li className="nav-item mx-5">
								<Link to="/">
									<button type="button" className="btn btn-info">
										Tabla de Personas
									</button>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/guardar-persona">
									<button type="button" className="btn btn-info">
										Crear Persona
									</button>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
