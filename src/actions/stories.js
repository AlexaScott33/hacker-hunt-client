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

export const fetchJobs = () => dispatch => {
    dispatch(fetchStoriesRequest());
    fetch('https://hackerhunt.co/api/daily/0')
    .then(res => res.json())
    .then(data => {
        dispatch(fetchStoriesSuccess(data));
    })
    .catch(err => {
        dispatch(fetchStoriesError(err));
    });
}