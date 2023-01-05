<template>
  <fieldset>
    <legend>index</legend>
    <div :is="name">
      <h1>动态组件</h1>
    </div>
  </fieldset>
</template>
<script>
import one from "./one.vue";
import two from "./two.vue";
export default {
  data() {
    return {
      name: "one",
    };
  },
  components: {
    one,
    two,
  },
};
</script>