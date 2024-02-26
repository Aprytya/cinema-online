// import axios from "axios";
// import { Dispatch } from "redux";
// import { BaseUrl } from "../../../config/api";
// import { LoginBodyRequest } from "@/entities/auth.entities";
// import { AuthStoreType } from "../../../types/AuthStoreType";

// const login = (body:LoginBodyRequest) => async (dispatch:Dispatch) =>{
//     try {
//         const response = await axios.post(`${BaseUrl}/login`, body, {
//             headers : {
//                 "Content-Type" : "application/json"
//             }
//         });
//         if(response.data.statusCode == 100){
//             dispatch({
//                 type : AuthStoreType.LOGIN,
//                 isLogin : true,
//                 token : response.data.data.token
//             })
//             window.alert("Login Berhasil")
//             setTimeout(()=>{
//                 window.location.href = "/home"
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// const logout = () => async (dispatch:Dispatch) =>{
//     dispatch({
//         type : AuthStoreType.LOGOUT,
//     })
//     window.location.reload();
// }


// export const Actionlogin = {
//     login,
//     logout,
// }

// 'use client'
// import axios from "axios";
// import { Dispatch } from "redux";
// import { BaseUrl, configPrimary } from "../../../config/api";
// import { LoginBodyRequest } from "@/entities/auth.entities";
// import { AuthStoreType } from "@/types/AuthStoreType";

// const login = (body:LoginBodyRequest) => async (dispatch:Dispatch) =>{
//     try {
//         const response = await axios.post(`${BaseUrl.main}/login`, body, {
//             headers : {
//                 "Content-Type" : "application/json"
//             }
//         });
//         if(response.data.statusCode == 200){
//             dispatch({
//                 type : AuthStoreType.LOGIN,
//                 isLogin : true,
//                 token : response.data.data.token
//             })
//             window.alert("Login Berhasil")
//             setTimeout(()=>{
//                 window.location.href = "/Homepage"
//             },1000)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// const logout = () => async (dispatch:Dispatch) =>{
//     dispatch({
//         type : AuthStoreType.LOGOUT,
//     })
//     window.location.reload();
// }


// export const ActionLogin = {
//     login,
//     logout,
// }

// 'use client'
// import axios from "axios";
// import { Dispatch } from "redux";
// import { BaseUrl } from "../../../config/api";
// import { LoginBodyRequest } from "@/entities/auth.entities";
// import { AuthStoreType } from "@/types/AuthStoreType";

// const login = (body: LoginBodyRequest) => async (dispatch: Dispatch) => {
//     try {
//         const response = await axios.post(`${BaseUrl.main}/login`, body, {
//             headers: {
//                 "Content-Type": "application/json"
//             } });
//         if (response.data.statusCode === 200) {
//             dispatch({
//                 type: AuthStoreType.LOGIN,
//                     token: response.data.data.token
//             });
//             window.alert("Login Berhasil");
//         } } catch (error) {
//         console.log(error);
//     }}
// const logout = () => async (dispatch: Dispatch) => {
//     dispatch({
//         type: AuthStoreType.LOGOUT,
//     });
// }

// export const ActionLogin = {
//     login,
//     logout,
// }

'use client'
import axios from "axios";
import { Dispatch } from "redux";
import { BaseUrl } from "../../../config/api";
import { LoginBodyRequest } from "@/entities/auth.entities";
import { AuthStoreType } from "@/types/AuthStoreType";

const login = (body: LoginBodyRequest) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.post(`${BaseUrl.main}/login`, body, {
            headers: {
                "Content-Type": "application/json"
            } 
        });

        if (response.data.statusCode === 200) {
            const { token, role } = response.data.data;
            if (role === "admin") {
                window.location.href = '/admin';
            } else if (role === "customer") {
                window.location.href = '/homepage';
            }
            dispatch({
                type: AuthStoreType.LOGIN,
                    token: response.data.data.token
            });
            window.alert("Login Berhasil");
        } } catch (error) {
        console.log(error);
    }}
const logout = () => async (dispatch: Dispatch) => {
    dispatch({
        type: AuthStoreType.LOGOUT,
    });
}

export const ActionLogin = {
    login,
    logout,
}

