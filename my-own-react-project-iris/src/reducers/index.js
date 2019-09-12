import { FETCHING_JOKE_START, GOT_THEM_JOKES } from "../actions";

const initialState = {
    jokes: [
        {
        id: Math.random(),
        type: 'Hello',
        setup: "example setup",
        punchline: 'example punchline'
    },
],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_JOKE_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case GOT_THEM_JOKES:
            return {
                ...state,
                jokes: action.payload,
                isFetching: false
            };
        default: 
        return state
    }
}