import { FETCH_STORIES_REQUEST,
         FETCH_STORIES_SUCCESS,
         FETCH_STORIES_ERROR
} from '../actions/stories';

const initialState = {
    data: [],
    loading: false,
    error: false
}

export default function storiesReducer(state=initialState, action) {
    if (action.type = FETCH_STORIES_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    if (action.type = FETCH_STORIES_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            loading: false,
            error: false
        });
    }
    if (action.type = FETCH_STORIES_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}
