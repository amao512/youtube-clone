import { API } from "../api";

const SET_DATA = 'SET_DATA';

const initialState = {
    data: [],
    currentVideo: null
}

const videosReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA:
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export const setData = data => ({ type: SET_DATA, data });

export const getData = () => async dispatch => {
    const data = await API.getData();

    return dispatch(setData(data));
}

export default videosReducer;