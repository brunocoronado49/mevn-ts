<template>
  <h1>TaskList</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTasks } from "../services/TaskServices";
import { Task } from "../interfaces/Task";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[]
    }
  },
  methods: {
    async getAllTasks() {
      const res = await getTasks();
    },
  },
  mounted() {
    this.getAllTasks();
  },
});
</script>
