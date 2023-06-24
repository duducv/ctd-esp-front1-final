import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from 'redux-thunk'
import charReducer from "./reducers/charReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import filterReducer from "./reducers/filterReducer";
import paginationReducer from "./reducers/paginationReducer";

const rootReducer = combineReducers({
    filterReducer,
    charReducer,
    favoritesReducer,
    paginationReducer
})

export type IRootState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(rootReducer, applyMiddleware(thunk))


