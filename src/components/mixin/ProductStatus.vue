<template>
  <h2>전체 금액: {{ totalMoney }}</h2>
  <button @click="addMoney(1000)">1000</button>
  <button @click="addMoney(2000)">2000</button>
  <button @click="addMoney(3000)">3000</button>
  <button @click="addMoney(4000)">4000</button>
</template>

<script>
import useMoney from "../../composables/useMoney";
export default {
  name: "productStatus",
  setup() {
    const { addMoney, totalMoney } = useMoney();

    return {
      addMoney,
      totalMoney,
    };
  },
};
</script>

<style></style>
