

import {  legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { reducer } from "./Products/reducer";


const rootReducer =combineReducers({reducer})

export const store =legacy_createStore(rootReducer, applyMiddleware(thunk))