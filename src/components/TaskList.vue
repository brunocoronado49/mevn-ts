<template>
  <h1>TaskList</h1>
  <ul class="list-group">
    <li
      v-for="task in tasks"
      :key="task._id"
      @click="$router.push(`/task/${task._id}`)"
      class="list-group-item list-group-item-action"
      style="cursor: pointer"
    >
      {{ task.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTasks } from "../services/TaskServices";
import { Task } from "../interfaces/Task";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async getAllTasks() {
      const res = await getTasks();
      this.tasks = res.data;
    },
  },
  mounted() {
    this.getAllTasks();
  },
});
</script>
