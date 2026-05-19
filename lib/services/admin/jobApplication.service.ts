import { apiClient } from "../appClient";

export const createJobApplication = async (payload: any) => {
    const response = await apiClient.post("/jobApplication/createApplication", payload);
    return response.data;
};

export const getJobApplication = async () => {
    const response = await apiClient.get("/jobApplication/getAllJobApplications");
    return response.data;
};

export const updateJobApplication = async (id: any, payload: any) => {
    const response = await apiClient.put(`jobApplication/updateJobApplication/${id}`, payload);
    return response.data;
};

export const deleteJobApplication = async (id: any) => {
    const response = await apiClient.delete(`jobApplication/deleteJobApplication/${id}`);
    return response.data;
};

