<template>
  <div id="app">
    <!-- <contain></contain>
    <mixcom></mixcom>
    <dymic></dymic>
    <tab></tab> -->
    <!-- <tabs></tabs> -->
    <!-- <alive></alive> -->
    <!-- <h1>{{ aa }}</h1>
    <api></api> -->
    <animateCom></animateCom>
  </div>
</template>

<script>
import contain from "./components/contain/index.vue";
import mixcom from "./components/mixcom";
import dymic from "./components/dymic/index.vue";
import tab from "./components/tab/index.vue";
import tabs from "@/components/tabs";
import alive from "@/components/keep-alive";
import api from "@/components/常用api";
import animateCom from "@/components/animate/animate.vue";
export default {
  provide() {
    return {
      gift: this.obj.gift,
    };
  },
  components: {
    contain,
    mixcom,
    dymic,
    tab,
    tabs,
    alive,
    api,
    animateCom,
  },
  data() {
    return {
      aa: "app.vue",
      obj: {
        gift: "vue",
      },
    };
  },
  mounted() {
    console.log(this);
    setTimeout(() => {
      this.aa = "喜洋洋";
    });
  },
};
</script>
