<template>
  <h2>Todo List</h2>
  <button @click="getTodoList">Request Todo</button>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
  </ul>

  <div>
    <label for="todo">할 일</label>
    <input type="text" v-model="todoItem.title" />
    <button @click="createTodo">전송 저장</button>
  </div>

  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script>
import axios from "axios";
export default {
  name: "todoList",
  data() {
    return {
      todoItem: {
        title: "",
        completd: false,
      },
      todoList: [],
      errorMessage: "",
    };
  },
  methods: {
    getTodoList() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .get(url)
        .then((res) => (this.todoList = res.data))
        .catch((e) => {
          console.log(e);
          this.errorMessage = "에러 발생!";
        });
    },
    createTodo() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .post(url, this.todoItem)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style></style>
