import { API } from "../../api";
import { setData } from '../actions';

/* Thunks of VideosReducer */
export const getData = () => async dispatch => {
    const data = await API.getData();

    return dispatch(setData(data));
}

export const searchData = searchTerm => async dispatch => {
    const data = await API.getData(searchTerm);

    return dispatch(setData(data));
}