import { 
    SetDataType, ChangeSearchTermType, 
    SetCurrentVideoType, CloseCurrentVideoType
} from './../../types/actionsTypes';
import {
    SET_DATA, CHANGE_SEARCH_TERM,
    SET_CURRENT_VIDEO, CLOSE_CURRENT_VIDEO
} from '../constants';

/* Actions of VideosReducer */
export const setData = (data: Array<any>): SetDataType => ({ type: SET_DATA, data });
export const changeSearchTerm = (searchTerm: string): ChangeSearchTermType => ({ type: CHANGE_SEARCH_TERM, searchTerm });
export const setCurrentVideo = (video: string): SetCurrentVideoType => ({ type: SET_CURRENT_VIDEO, video });
export const closeCurrentVideo = (): CloseCurrentVideoType => ({ type: CLOSE_CURRENT_VIDEO });