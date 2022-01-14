import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuardarPersona from './components/GuardarPersona';
import NavBar from './components/NavBar';
import TablaPersonas from './components/TablaPersonas';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { EditarPersona } from './components/EditarPersona';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/" component={TablaPersonas} />
						<Route exact path="/guardar-persona" component={GuardarPersona} />
						<Route exact path="/editar-persona" component={EditarPersona} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
