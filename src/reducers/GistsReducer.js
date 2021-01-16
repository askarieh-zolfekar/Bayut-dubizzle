/**
 * Gists Reducer
 */

import {LIST_PUBLIC_GISTS, START_LOADING_GISTS, STOP_LOADING_GISTS} from "../actions/types";

/**
 * initial general values
 */
const INIT_STATE = {
    gists: [],
    loadingGists: false
};

export default (state = INIT_STATE, {type, payload }) => {
    switch (type) {
        case START_LOADING_GISTS:
            return {...state, loadingGists: true};
        case STOP_LOADING_GISTS:
            return {...state, loadingGists: false};
        case LIST_PUBLIC_GISTS:
            return {...state, gists: payload};
        default:
            return { ...state };
    }
}
