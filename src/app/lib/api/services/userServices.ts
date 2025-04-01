import type { User, CreateUserDto, UpdateUserDto } from "@/types";
import { apiClient } from "../apiClient";

export const userService = {
  //   async getUsers(params?: { page?: number; limit?: number }) {
  //     return apiClient.get<{
  //       data: User[];
  //       pagination: {
  //         page: number;
  //         limit: number;
  //         total: number;
  //         totalPages: number;
  //       };
  //     }>("/users", params);
  //   },

  //   async getUserById(id: string) {
  //     return apiClient.get<User>(`/users/${id}`);
  //   },

  async createUser(userData: CreateUserDto) {
    return apiClient.post<User>("/users", userData);
  },

  async updateUser(id: string, userData: UpdateUserDto) {
    return apiClient.put<User>(`/users/${id}`, userData);
  },

  async deleteUser(id: string) {
    return apiClient.delete<{ success: boolean }>(`/users/${id}`);
  },
};
