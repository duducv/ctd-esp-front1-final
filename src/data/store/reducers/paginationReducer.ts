import { AnyAction } from "@reduxjs/toolkit";
import { IPagination } from "../../dto/IPagination";

const INITAL_STATE: IPagination = {
    total: 0,
    actual: 1,
    charsToShow: []
}

export enum PAGINATION_REDUCER_ENUM {
    UPDATE,
}

export default function paginationReducer(state = INITAL_STATE, action: AnyAction): IPagination {
    switch (action.type) {
        case PAGINATION_REDUCER_ENUM.UPDATE:
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}