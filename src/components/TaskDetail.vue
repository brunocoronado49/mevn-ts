<template>
  <h1>Detail</h1>
  <form @submit.prevent="update(currentTask._id, currentTask)">
    <input type="text" v-model="currentTask.title" />
    <textarea rows="3" v-model="currentTask.description"></textarea>
    <button>Update</button>
    <button>Delete</button>
  </form>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { defineComponent } from "vue";
import { getTask, updateTask } from "../services/TaskServices";

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

    async update(id: string, task: Task) {
      const updatedTask = await updateTask(id, task);
      console.log(updatedTask);

      this.currentTask = updatedTask.data;
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }

    if (typeof this.$route.params.id === "string") {
      this.update(this.$route.params.id, this.currentTask);
    }
  },
});
</script>
