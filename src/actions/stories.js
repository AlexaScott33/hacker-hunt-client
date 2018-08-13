import { API_BASE_URL } from '../config';

export const FETCH_STORIES_REQUEST = 'FETCH_STORIES_REQUEST';
export const fetchStoriesRequest = () => ({
    type: FETCH_STORIES_REQUEST
});

export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS';
export const fetchStoriesSuccess = data => ({
    type: FETCH_STORIES_SUCCESS,
    data
});

export const FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR';
export const fetchStoriesError = error => ({
    type: FETCH_STORIES_ERROR,
    error
});

export const fetchStories = () => dispatch => {
    dispatch(fetchStoriesRequest());
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        dispatch(fetchStoriesSuccess(data));
    })
    .catch(err => {
        dispatch(fetchStoriesError(err));
    });
}