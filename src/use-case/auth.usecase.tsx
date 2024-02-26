'use client'
import { LoginBodyRequest } from "@/entities/auth.entities";
import { ActionLogin } from "@/states/actions/auth.action";
import { AuthStoreState } from "@/states/reducers/authentication.reducers";
import { AuthSettingStore } from "@/states/setting-store/auth.setting";
import { AppRootState } from "@/states/stores";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const selector = (state:AppRootState) => state.auth;

const AuthUseCase = ():AuthSettingStore =>{
    const {
        isLogin,
        token,
    } = useSelector <
    AppRootState,
    AuthStoreState
    > (selector)
    const dispatch = useDispatch();
    const login = useCallback((body:LoginBodyRequest)=> ActionLogin.login(body)(dispatch),[dispatch]);
    const logout = useCallback(()=> ActionLogin.logout()(dispatch),[dispatch]);
    return {
        isLogin,
        token,

        login,
        logout
    }
}

export default AuthUseCase;


// import { LoginBodyRequest } from "@/entities/auth.entities";
// import { ActionLogin } from "@/states/actions/auth.action";
// import { AuthStoreState } from "@/states/reducers/authentication.reducers";
// import { AuthSettingStore } from "@/states/setting-store/auth.setting";
// import { AppRootState } from "@/states/stores";
// import { useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const selector = (state: AppRootState) => state.auth;

// const AuthUseCase = (): AuthSettingStore => {
//     const {
//         isLogin,
//         token,
//     } = useSelector<AppRootState, AuthStoreState>(selector);
//     const dispatch = useDispatch();
//     const login = useCallback((body: LoginBodyRequest) => ActionLogin.login(body)(dispatch), [dispatch]);
//     const logout = useCallback(() => ActionLogin.logout()(dispatch), [dispatch]);

//     return {
//         isLogin,
//         token,

//         login,
//         logout
//     }
// }

// export default AuthUseCase;
