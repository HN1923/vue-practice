<template>
  <h2>Hello Reusability</h2>
  <hr />
  <ProductStatus />
  <hr />
  <FeeStatus />
  <hr />
  <SavingStatus />
</template>

<script>
import ProductStatus from "../mixin/ProductStatus";
import FeeStatus from "../mixin/FeeStatus";
import SavingStatus from "../mixin/SavingStatus";
import {} from "vue";
export default {
  name: "TestComponent",
  components: {
    ProductStatus,
    FeeStatus,
    SavingStatus,
  },
};
</script>

<style></style>
