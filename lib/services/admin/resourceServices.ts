import { apiClient } from "../appClient";

export const createResource = async (payload: any) => {
    const response = await apiClient.post("/resources/createResource", payload);
    return response.data;
};

export const getAllResources = async () => {
    const response = await apiClient.get("/resources/getAllResources");
    return response.data;
};

export const updateResources = async (
    id: any,
    payload: any
) => {

    const response = await apiClient.put(
        `/resources/updateResource/${id}`,
        payload
    );

    return response.data;
};

export const deleteResources = async (id: any) => {

    const response = await apiClient.delete(
        `/resources/deleteResource/${id}`
    );

    return response.data;
};

export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("files", file);
    const response = await apiClient.post(
        "/upload/fileUpload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

