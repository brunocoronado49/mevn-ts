import { axiosInstance } from "./axios";
import { Task } from "../interfaces/Task";

export const createTask = async (task: Task) => {
  await axiosInstance.post("/create", task);
};
