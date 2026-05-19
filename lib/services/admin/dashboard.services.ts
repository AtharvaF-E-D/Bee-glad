import { apiClient } from "../appClient";

export const getDashboardStats = async () => {
    const response = await apiClient.get("/dashboard/getDashboardStats");
    return response.data;
};
