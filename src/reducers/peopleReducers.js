export function peopleReducer(state=[], action) {
    switch(action.type) {
        case "SET_ACTIVE_PEOPLE_LIST":
            return [...action.payload];
        default:
            return state;
    }
}