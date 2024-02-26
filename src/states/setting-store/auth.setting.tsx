// 'use client'
// import { LoginBodyRequest } from "../../entities/auth.entities";

// interface AuthSettingStore {
//     isLogin : boolean
//     token : string | null
    
//     login(body:LoginBodyRequest):Promise<void>
//     logout():Promise<void>
// }

// export type {AuthSettingStore};

import { LoginBodyRequest } from "../../entities/auth.entities";

interface AuthSettingStore {
    isLogin: boolean;
    token: string | null;

    login(body: LoginBodyRequest): Promise<void>;
    logout(): Promise<void>;
}

export type { AuthSettingStore };
