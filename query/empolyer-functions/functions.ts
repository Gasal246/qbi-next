/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const registerEmployer = async (payload: any) => {
    try {
        const res = await axios.post("/api/employer/create-employer", payload);
        return res.data;
    } catch (error: any) {
        console.log(error);
    }
}