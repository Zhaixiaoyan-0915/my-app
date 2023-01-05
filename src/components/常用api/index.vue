<template>
  <fieldset>
    <legend>父传子</legend>
    <input type="text" ref="ipt" />
    <button @click="handleClick">点击</button>
    <h1>{{ a }}</h1>
    <h2>{{ b }}</h2>
    <child ref="child"></child>
  </fieldset>
</template>
<script>
import child from "@/components/常用api/child";
export default {
  data() {
    return {
      a: "",
      b: "sfdfds",
    };
  },
  mounted() {
    setTimeout(() => {
      // this.$parent.aa = "sfs";
      this.b = this.$refs.child.val;
    }, 2000);
  },

  methods: {
    handleClick() {
      console.log(this.$refs);
      this.$refs.ipt.focus();
      console.log(this.$refs.ipt.value);
      this.a = this.$refs.child.val;
    },
  },
  components: {
    child,
  },
};
</script>