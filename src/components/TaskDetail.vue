<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="update()" class="card card-body">
      <h3 class="text-center mb-3">Detail</h3>
      <input
        type="text"
        v-model="currentTask.title"
        class="form-control mb-3"
      />
      <textarea
        rows="3"
        v-model="currentTask.description"
        class="form-control mb-3"
      ></textarea>
      <button type="submit" class="btn btn-primary mb-3">Update</button>
      <button @click="deleteT()" class="btn btn-danger">Delete</button>
    </form>
  </div>
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
