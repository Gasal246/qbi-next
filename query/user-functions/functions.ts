/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const registerUser = async (payload: any) => {
    try {
        const res = await axios.post("/api/user/create-user", payload);
        return res.data;
    } catch (error: any) {
        console.log(error);
    }
}