<template>
  <h1>Create a new Task</h1>
  <form @submit.prevent="saveTask()">
    <input type="text" placeholder="Title" name="title" v-model="task.title" />
    <textarea
      name="description"
      rows="3"
      placeholder="Description"
      v-model="task.description"
    ></textarea>
    <button type="submit">Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "../interfaces/Task";
import { createTask } from "../services/TaskServices";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
