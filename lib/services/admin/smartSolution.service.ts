import { apiClient } from "../appClient";

export const getSmartSolutions = async () => {
    const response = await apiClient.get("/smartSolution/getAllSolutions");
    return response.data;
};

export const createSmartSolutions = async (payload: any) => {
    const response = await apiClient.post("/smartSolution/createSolution", payload);
    return response.data;
};