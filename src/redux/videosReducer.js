import { API } from "../api";

const SET_DATA = 'SET_DATA';
const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
const SET_CURRENT_VIDEO = 'SET_CURRENT_VIDEO';

const initialState = {
    data: [],
    currentVideo: null,
    searchTerm: '',
}

const videosReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA:
            return { ...state, data: action.data }
        case CHANGE_SEARCH_TERM:
            return { ...state, searchTerm: action.searchTerm }
        case SET_CURRENT_VIDEO:
            return { ...state, currentVideo: action.video }
        default:
            return state;
    }
}

export const setData = data => ({ type: SET_DATA, data });
export const changeSearchTerm = searchTerm => ({ type: CHANGE_SEARCH_TERM, searchTerm });
export const setCurrentVideo = video => ({ type: SET_CURRENT_VIDEO, video });

export const getData = () => async dispatch => {
    const data = await API.getData();
    console.log(data)
    return dispatch(setData(data));
}

export const searchData = searchTerm => async dispatch => {
    const data = await API.getData(searchTerm);

    return dispatch(setData(data));
}

export default videosReducer;