import { Dispatch } from "react";
import { FILTERREDUCERENUM } from "../reducers/filterReducer";
import { AnyAction } from "@reduxjs/toolkit";
import { IActionType } from "./types";

export function changeFilterInput(
     dispatch: Dispatch<VoidFunction | IActionType<FILTERREDUCERENUM, string>>,
     payload: string
     ) {

    dispatch({ type: FILTERREDUCERENUM.CHANGE_TEXT, payload})
}
