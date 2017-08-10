import axios from 'axios';

const list =  [
    "https://swapi.co/api/people/1/",
    "https://swapi.co/api/people/2/",
    "https://swapi.co/api/people/3/",
    "https://swapi.co/api/people/4/",
    "https://swapi.co/api/people/5/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/8/",
    "https://swapi.co/api/people/9/",
    "https://swapi.co/api/people/10/",
    "https://swapi.co/api/people/12/",
    "https://swapi.co/api/people/13/",
    "https://swapi.co/api/people/14/",
    "https://swapi.co/api/people/15/",
    "https://swapi.co/api/people/16/",
    "https://swapi.co/api/people/18/",
    "https://swapi.co/api/people/19/",
    "https://swapi.co/api/people/81/"
];

export function getPeopleList(urlList=list) {
    return function(dispatch) {
        axios.all(
            urlList.map((url) => axios.get(url))
        )
            .then(function(responses){
                const peopleList = responses.map(response => response.data);
                dispatch({
                    type: "SET_ACTIVE_PEOPLE_LIST",
                    payload: peopleList
                })
            })
            .catch(function(err) {
                console.log("error caused by getPeopleList", err);
            })
    }

}


