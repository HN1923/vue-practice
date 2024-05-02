<template>
  <h2>Child Component</h2>
  <input type="text" v-model="username" />
</template>

<script>
export default {
  name: "ChildComp",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sayHello() {
      console.log("say hello");
    },
  },
  beforeCreate() {
    console.log("child before create");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child before mount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child before update");
  },
  updated() {
    console.log("child updated");
  },
  beforeUnmount() {
    console.log("child before unmount");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style></style>
