import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { favoriteListReducer } from '../reducers/favoriteReducer';

const rootReducer = combineReducers({
    favorite: favoriteListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
