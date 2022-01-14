import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { personaReducer } from '../reducers/personaReducer';

const reducers = combineReducers({
	personas: personaReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
