<template>
  <h2>총 적금: {{ totalMoney }}</h2>
  <button @click="addMoney(1000)">1000</button>
  <button @click="addMoney(2000)">2000</button>
  <button @click="addMoney(3000)">3000</button>
  <button @click="addMoney(4000)">4000</button>
</template>

<script>
import useMoney from "../../composables/useMoney";
export default {
  name: "savingStatus",
  setup() {
    const { addMoney, totalMoney } = useMoney(5000);

    return {
      addMoney,
      totalMoney,
    };
  },
};
</script>

<style></style>
