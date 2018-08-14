import { API_KEY } from '../config';

export const FETCH_STORIES_REQUEST = 'FETCH_STORIES_REQUEST';
export const fetchStoriesRequest = () => ({
    type: FETCH_STORIES_REQUEST
});

export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS';
export const fetchStoriesSuccess = gifs => ({
    type: FETCH_STORIES_SUCCESS,
    gifs
});

export const FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR';
export const fetchStoriesError = error => ({
    type: FETCH_STORIES_ERROR,
    error
});

export const fetchStories = () => dispatch => {
    dispatch(fetchStoriesRequest());
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch(fetchStoriesSuccess(data));
    })
    .catch(err => {
        dispatch(fetchStoriesError(err));
    });
}