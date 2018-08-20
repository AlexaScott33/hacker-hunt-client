import { API_KEY } from '../config';

export const FETCH_STORIES_REQUEST = 'FETCH_STORIES_REQUEST';
export const fetchStoriesRequest = () => ({
    type: FETCH_STORIES_REQUEST
});

export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS';
export const fetchStoriesSuccess = videos => ({
    type: FETCH_STORIES_SUCCESS,
    videos
});

export const FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR';
export const fetchStoriesError = error => ({
    type: FETCH_STORIES_ERROR,
    error
});

export const fetchStories = () => dispatch => {
    dispatch(fetchStoriesRequest());
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=cat&key=AIzaSyAPqOzLozqDFgdStKQh-j5TyJkIWjs1-lA`, {
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