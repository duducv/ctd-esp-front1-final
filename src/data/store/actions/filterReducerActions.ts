import { Dispatch } from "react";
import { FILTER_REDUCER_ENUM } from "../reducers/filterReducer";
import { IActionType } from "./types";

export function changeFilterInput(
     dispatch: Dispatch<VoidFunction | IActionType<FILTER_REDUCER_ENUM, string>>,
     payload: string
     ) {
    dispatch({ type: FILTER_REDUCER_ENUM.CHANGE_TEXT, payload })
}
