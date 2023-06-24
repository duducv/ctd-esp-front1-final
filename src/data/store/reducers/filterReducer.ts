import { AnyAction } from "@reduxjs/toolkit"
import { IFilter } from "../../dto/IFilter"

export enum FILTER_REDUCER_ENUM {
    CHANGE_TEXT = 'CHANGE TEXT',
    CLEAR = 'CLEAR',
    SET_LOADING_FALSE = 'SET_LOADING_FALSE',
    SET_LOADING_TRUE = 'SET_LOADING_TRUE',
}


const INITIAL_STATE: IFilter = {
    isLoading: false,
    inputText: ''
}


export default function filterReducer(state = INITIAL_STATE, action: AnyAction): IFilter {
    switch(action.type) {
        case FILTER_REDUCER_ENUM.CHANGE_TEXT:
            return { ...state, inputText: action.payload }
        case FILTER_REDUCER_ENUM.SET_LOADING_TRUE:
            return { ...state, isLoading: true }
        case FILTER_REDUCER_ENUM.SET_LOADING_FALSE:
            return { ...state, isLoading: false }
        default: 
        return { ...state }
    }
}