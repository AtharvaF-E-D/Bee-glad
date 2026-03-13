// import { account } from "./config";

import { account } from "./config";


export const loginService = async (email: string, password: string) => {
    try {
        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        return {
            success: true,
            data: session,
        };
    } catch (error: any) {
        console.error("Login error:", error);

        return {
            success: false,
            message: error?.message || "Login failed",
        };
    }
};

// export const loginService = async (email: string, password: string) => {
//   try {
//     const res = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     })
//     const data = await res.json()
//     return data
//   } catch (error: any) {
//     console.error('Login error:', error)
//     return { success: false, message: error.message }
//   }
// }