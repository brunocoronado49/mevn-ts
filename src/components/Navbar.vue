<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Tasks</router-link>
      </li>
      <li>
        <router-link to="/create">Create task</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
});
</script>
