import axios from 'axios';

export function getPeopleList(filmId) {
    console.log(filmId);
    return function(dispatch) {
        axios.get(`https://swapi.co/api/films/${filmId}/`)
            .then(function(response) {
                const film = response.data;
                const characters = response.data.characters;
                if (characters) {
                    axios.all(
                        characters.map((url) => axios.get(url))
                    )
                        .then(function(responses){
                            const peopleList = responses.map(response => response.data);
                            dispatch({
                                type: "SET_ACTIVE_PEOPLE_LIST",
                                payload: peopleList
                            });
                            dispatch({
                                type: 'SET_ACTIVE_FILM',
                                payload: film
                            });
                        })
                        .catch(function(err) {
                            console.log("error caused by getPeopleList", err);
                        })
                }

            })
            .catch(function(err){
                console.log("error caused by getPeopleList", err);
            })
    }
}


