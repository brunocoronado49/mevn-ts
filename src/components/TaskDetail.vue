<template>
  <h1>Detail</h1>
  <form @submit.prevent="update()">
    <input type="text" v-model="currentTask.title" />
    <textarea rows="3" v-model="currentTask.description"></textarea>
    <button type="submit">Update</button>
    <button @click="deleteT()">Delete</button>
  </form>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { defineComponent } from "vue";
import { deleteTask, getTask, updateTask } from "../services/TaskServices";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const task = await getTask(id);
      console.log(task);

      this.currentTask = task.data;
    },

    async update() {
      if (typeof this.$route.params.id === "string") {
        const updatedTask = await updateTask(
          this.$route.params.id,
          this.currentTask
        );
        console.log(updatedTask);
        this.currentTask = updatedTask.data;

        this.$router.push({ name: "tasks" });
      }
    },

    async deleteT() {
      if (typeof this.$route.params.id === "string") {
        const deletedTask = await deleteTask(this.$route.params.id);
        console.log(deletedTask);
        this.currentTask = deletedTask.data;
        
        this.$router.push({ name: "tasks" });
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
