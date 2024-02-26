// 'use client'
// import { AnyAction } from "redux";
// import { AuthSettingStore } from "../setting-store/auth.setting";
// import { AuthStoreType } from "@/types/AuthStoreType";

// type AuthStoreState = Omit<
//     AuthSettingStore,
//     "login" | 
//     "logout"
// >

// const INITIAL_STATE: AuthStoreState= {
//     isLogin : false,
//     token : null
// }


// const AuthReducers = (state:AuthSettingStore | any = INITIAL_STATE, action :AnyAction )=>{
//     const {type, payload} = action;
//     switch (type) {
//         case AuthStoreType.LOGIN:
//             return {
//                 ...state,
//                 isLogin : action.isLogin,
//                 token : action.token
//             }
//         case AuthStoreType.LOGOUT:
//             return {
//                 isLogin : false,
//                 token : null
//             }    
//         default:
//             return state;
//     } 
// }

// export type {AuthStoreState}
// export default AuthReducers;

'use client'
import { AnyAction } from "redux";
import { AuthStoreType } from "@/types/AuthStoreType";

interface AuthStoreState {
    isLogin: boolean;
    token: string | null;}

const INITIAL_STATE: AuthStoreState = {
    isLogin: false,
    token: null}

const AuthReducers = (state = INITIAL_STATE, action: AnyAction): AuthStoreState => {
    const { type, payload } = action;
    switch (type) {
        case AuthStoreType.LOGIN:
            return {
                ...state,
                isLogin: true,
                token: action.token
            }
        case AuthStoreType.LOGOUT:
            return {
                isLogin: false,
                token: null
            }
        default:
            return state;
    }}
export type { AuthStoreState }
export default AuthReducers;
