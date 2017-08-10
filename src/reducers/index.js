import {combineReducers} from 'redux';

import {filmsReducers} from './filmReducers';
import {filmReducers} from './filmReducers';
import {peopleReducer} from './peopleReducers';

export default combineReducers({
    films: filmsReducers,
    activeFilm: filmReducers,
    characters: peopleReducer
})