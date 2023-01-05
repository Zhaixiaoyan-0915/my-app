<template>
  <h1>{{ gift }}</h1>
</template>
<script>
export default {
  inject: ["gift"],
  data() {
    return {
      val: "123",
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>