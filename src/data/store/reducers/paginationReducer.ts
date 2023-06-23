import { AnyAction } from "@reduxjs/toolkit";
import { IPagination } from "../../dto/IPagination";

const INITAL_STATE: IPagination = {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
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