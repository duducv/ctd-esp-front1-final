import { AnyAction } from "@reduxjs/toolkit"
import { IFilter } from "../../dto/IFilter"

export enum FILTERREDUCERENUM {
    CHANGE_TEXT,
    CLEAR,
    SET_LOADING_FALSE,
    SET_LOADING_TRUE,
}


const INITIAL_STATE: IFilter = {
    isLoading: false,
    inputText: ''
}


export default function filterReducer(state = INITIAL_STATE, action: AnyAction): IFilter {
    switch(action.type) {
        case FILTERREDUCERENUM.CHANGE_TEXT:
            return { ...state, inputText: action.payload }
        case FILTERREDUCERENUM.SET_LOADING_TRUE:
            return { ...state, isLoading: true }
        case FILTERREDUCERENUM.SET_LOADING_FALSE:
            return { ...state, isLoading: false }
        default: 
        return { ...state }
    }
}