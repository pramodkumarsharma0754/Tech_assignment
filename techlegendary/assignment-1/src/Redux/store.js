import { reducer } from "./reducer";
import {legacy_createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
export const store= legacy_createStore(reducer,applyMiddleware(thunk))