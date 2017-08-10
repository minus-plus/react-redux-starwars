import axios from 'axios';

export function getFilms() {
    return function(dispatch) {
        axios.get('https://swapi.co/api/films/')
            .then(function(response) {
                dispatch({
                    type: 'GET_FILMS',
                    payload: response.data.results
                })
            })
            .catch(function(err) {
                console.log('Caught error when fetch films data');
            })
    }
}

export function setActiveFilm(film) {
    // fetch active film
    return {
        type: 'SET_ACTIVE_FILM',
        payload: film
    };
}