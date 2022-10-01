<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask()" class="card card-body">
      <h3 class="text-center mb-3">Create a new Task</h3>
      <input
        type="text"
        placeholder="Title"
        name="title"
        v-model="task.title"
        class="form-control mb-3"
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Description"
        v-model="task.description"
        class="form-control mb-3"
      ></textarea>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="!task.title || !task.description"
      >
        Save
      </button>
    </form>
  </div>
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
