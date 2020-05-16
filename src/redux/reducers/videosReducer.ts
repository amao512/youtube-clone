import { VideoReducerInitialStateType } from './../../types/reducersTypes';
import { 
    SET_DATA, CHANGE_SEARCH_TERM, 
    SET_CURRENT_VIDEO, CLOSE_CURRENT_VIDEO 
} from '../constants'; 

const initialState: VideoReducerInitialStateType = {
    data: [],
    currentVideo: null,
    isWatching: false,
    searchTerm: '',
}

const videosReducer = (state = initialState, action: any): VideoReducerInitialStateType => {
    switch(action.type){
        case SET_DATA:
            return { ...state, data: action.data }
        case CHANGE_SEARCH_TERM:
            return { ...state, searchTerm: action.searchTerm }
        case SET_CURRENT_VIDEO:
            return { ...state, currentVideo: action.video, isWatching: true }
        case CLOSE_CURRENT_VIDEO:
            return { ...state, currentVideo: null, isWatching: false }
        default:
            return state;
    }
}

export default videosReducer;