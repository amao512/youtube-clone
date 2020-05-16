import { 
    SET_DATA, CHANGE_SEARCH_TERM,
    SET_CURRENT_VIDEO, CLOSE_CURRENT_VIDEO 
} from "../redux/constants";

export type SetDataType = {
    type: typeof SET_DATA
    data: Array<any>
}

export type ChangeSearchTermType = {
    type: typeof CHANGE_SEARCH_TERM
    searchTerm: string
}

export type SetCurrentVideoType = {
    type: typeof SET_CURRENT_VIDEO
    video: string
}

export type CloseCurrentVideoType = {
    type: typeof CLOSE_CURRENT_VIDEO
}