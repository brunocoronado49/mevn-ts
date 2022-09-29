import { Router } from "express";
import Task from "../models/Task";

export const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

router.post("/create", async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  console.log(task);
  await task.save();
  res.json(task);
});

router.get("/task/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "No existe!" })
    res.send(task);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error)
  }
});

router.delete("/delete/:id", (req, res) => {
  res.send("Eliminando tarea");
});

router.put("/update/:id", (req, res) => {
  res.send("actualizando tarea");
});
