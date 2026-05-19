import { apiClient } from "../appClient";

export const getAllJobs = async () => {
    const response = await apiClient.get("/jobs/getAllJob");
    return response.data;
};

export const createJobs = async (payload: any) => {
    const response = await apiClient.post("/jobs/createJob", payload);
    return response.data;
};

export const updateJobs = async (id: any, payload: any) => {
    const response = await apiClient.put(`/jobs/updateJob/${id}`, payload);
    return response.data;
};

export const deleteJobs = async (id: any) => {
    const response = await apiClient.delete(`/jobs/deleteJob/${id}`);
    return response.data;
};