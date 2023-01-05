<template>
  <div class="alive">
    <button @click="handleClick1" :class="{ active: name === 'tabs' }">
      1
    </button>
    <button @click="handleClick2" :class="{ active: name === 'mixcom' }">
      2
    </button>
    <keep-alive>
      <div :is="name"></div>
    </keep-alive>
  </div>
</template>
<script>
import mixcom from "@/components/mixcom";
import tabs from "@/components/tabs";
export default {
  data() {
    return {
      name: "tabs",
    };
  },

  methods: {
    handleClick1() {
      this.name = "tabs";
    },
    handleClick2() {
      this.name = "mixcom";
    },
  },
  components: {
    tabs,
    mixcom,
  },
};
</script>
<style scoped>
.active {
  background-color: hotpink;
}
</style>