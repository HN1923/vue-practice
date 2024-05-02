<template>
  <h2>Parent Component</h2>
  <input v-model="nickname" ref="inputRef" />
  <button @click="consoleRef">console ref</button>
  <hr />
  <ChildComp v-if="showChild" ref="childComp" />
  <button @click="showChild = false">unmount child</button>
</template>

<script>
import ChildComp from "./ChildComp";
export default {
  name: "parentComp",
  data() {
    return {
      nickname: "",
      showChild: true,
    };
  },
  methods: {
    consoleRef() {
      //   this.$refs.inputRef.focus();
      //   this.$refs.inputRef.style.border = "1px solid red";
      //   console.log(this.$refs.inputRef, this);
      console.log(this.$refs.inputRef, "input ref"); // DOM
      console.log(this.$refs.childComp, "child ref"); // proxy
      this.$refs.childComp.sayHello();
    },
  },
  components: {
    ChildComp,
  },
  beforeCreate() {
    console.log("parent before create");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent before mount");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    // console.log("parent before update");
  },
  updated() {
    // console.log("parent updated");
  },
  beforeUnmount() {
    console.log("parent before unmount");
  },
  unmounted() {
    console.log("parent unmounted");
  },
};
</script>

<style></style>
