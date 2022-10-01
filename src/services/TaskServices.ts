import { AxiosResponse } from "axios";
import { axiosInstance } from "./axios";
import { Task } from "../interfaces/Task";

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
  return await axiosInstance.get("/tasks");
};

export const createTask = async (task: Task) => {
  return await axiosInstance.post("/create", task);
};

export const getTask = async (id: string): Promise<AxiosResponse<Task>> => {
  return await axiosInstance.get("/task/" + id);
};

export const updateTask = async (
  id: string,
  task: Task
): Promise<AxiosResponse<Task>> => {
  return await axiosInstance.put("/update/" + id, task);
};

export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> => {
  return await axiosInstance.delete("/delete/" + id);
};
