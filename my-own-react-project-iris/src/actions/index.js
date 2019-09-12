import axios from 'axios'

export const FETCHING_JOKE_START = "FETCHING_JOKE_START";
export const GOT_THEM_JOKES = 'GOT_THEM_JOKES';
export const JOKE_GET_FAIL = "JOKE_GET_FAIL";

export const getJoke = () => {
    return dispatch => {
        dispatch({ type: FETCHING_JOKE_START});
        axios
        .get('https://official-joke-api.appspot.com/random_ten')
        .then(res => {
            dispatch({ type: GOT_THEM_JOKES, payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            dispatch({ type: JOKE_GET_FAIL, payload: err.res.message });
          });
    }
}