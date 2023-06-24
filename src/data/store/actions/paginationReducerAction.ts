import { Dispatch } from "@reduxjs/toolkit";
import { IRootState } from "..";
import { PAGINATION_REDUCER_ENUM } from "../reducers/paginationReducer";

export function goToNextPage(dispatch: Dispatch<any>) {
    dispatch((_:any, getState: () => IRootState) => {
        const root = getState()
        if (root.charReducer.length + 1 > root.paginationReducer.actual) {
            // dispatch({ type: PAGINATION_REDUCER_ENUM.UPDATE, payload: { ...payload, root.charReducer[root.paginationReducer.actual + 1]}})
        }
    })
}