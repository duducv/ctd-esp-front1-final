import { AnyAction } from "@reduxjs/toolkit";
import { IChars } from "../../dto/IChar";

export enum CHARREDUCERENUM {
    FILL_CHARS = "FILL_CHARS",
    CLEAR_CHARS = "CLEAR_CHARS"
}

const INITIAL_STATE: IChars[] = []

export default function favoritesReducer(state = INITIAL_STATE, action: AnyAction): IChars[] {
    switch(action.type) {
        case CHARREDUCERENUM.FILL_CHARS:
            return action.payload as IChars[]
        default:
            return state
    }
}
