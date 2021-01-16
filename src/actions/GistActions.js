import {LIST_PUBLIC_GISTS, START_LOADING_GISTS, STOP_LOADING_GISTS} from "./types";
import {getPublicGists, getPublicGistsByUsername} from "../services/gists";
import {NotificationManager} from "react-notifications";

export const listPublicGistsAction = () => (dispatch) => {
    dispatch({type: START_LOADING_GISTS});
    return getPublicGists()
        .then((response) => {
            dispatch({type: LIST_PUBLIC_GISTS, payload: response.data})
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            dispatch({type: STOP_LOADING_GISTS});
        });
};

export const searchGistsByUsername = (username) => (dispatch) => {
    dispatch({type: START_LOADING_GISTS});
    return getPublicGistsByUsername(username)
        .then((response) => {
            dispatch({type: LIST_PUBLIC_GISTS, payload: response.data})
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            dispatch({type: STOP_LOADING_GISTS});
        });
};
