import { apiClient } from "../appClient";

export const adminLogin = async (payload: any) => {
    const response = await apiClient.post("/admin/login", payload);
    return response.data;
};