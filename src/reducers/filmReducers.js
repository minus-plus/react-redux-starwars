
export function filmsReducers(state = [], action) {
    switch(action.type) {
        case 'GET_FILMS':
            return [
                ...action.payload
            ];
        default:
            return state;
    }
}


export function filmReducers(state={}, action) {
    switch (action.type) {
        case 'SET_ACTIVE_FILM':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}