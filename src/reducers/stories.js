import { FETCH_STORIES_REQUEST,
         FETCH_STORIES_SUCCESS,
         FETCH_STORIES_ERROR
} from '../actions/stories';

const initialState = {
    gifs: [],
    loading: false,
    error: false
}

export default function storiesReducer(state=initialState, action) {
    if (action.type === FETCH_STORIES_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === FETCH_STORIES_SUCCESS) {
        return Object.assign({}, state, {
            gifs: action.gifs,
            loading: false,
            error: false
        });
    }
    else if (action.type === FETCH_STORIES_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}
