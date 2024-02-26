import { Reducer, combineReducers,AnyAction } from "redux"
import AuthReducers from "./authentication.reducers";


const reducers = combineReducers({
    auth : AuthReducers,
})


export default reducers;