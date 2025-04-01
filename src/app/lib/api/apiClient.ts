import axiosClient from "./axios-client";

type ApiClient = {
  get: <T>(url: string, params?: Record<string, any>) => Promise<T>;
  post: <T>(url: string, data: any) => Promise<T>;
  put: <T>(url: string, data: any) => Promise<T>;
  patch: <T>(url: string, data: any) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
};

export const apiClient: ApiClient = {
  get: async <T>(url: string, params?: Record<string, any>) => {
    const response = await axiosClient.get<T>(url, { params });
    return response as T;
  },
  post: async <T>(url: string, data: any) => {
    const response = await axiosClient.post<T>(url, data);
    return response as T;
  },
  put: async <T>(url: string, data: any) => {
    const response = await axiosClient.put<T>(url, data);
    return response as T;
  },
  patch: async <T>(url: string, data: any) => {
    const response = await axiosClient.patch<T>(url, data);
    return response as T;
  },
  delete: async <T>(url: string) => {
    const response = await axiosClient.delete<T>(url);
    return response as T;
  },
};
