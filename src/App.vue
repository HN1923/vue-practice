<template>
  <div>
    <h2>Hello Composition API</h2>
    <TestComponent />
  </div>
</template>

<script>
import TestComponent from "./components/composition/TestComponent";
export default {
  name: "App",
  components: { TestComponent },
};
</script>

<style scoped></style>
