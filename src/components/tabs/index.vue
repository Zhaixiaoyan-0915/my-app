<template>
  <div class="tab">
    <button
      :class="['tab-button', { active: selectBtn === item }]"
      v-for="(item, index) in buttons"
      :key="index"
      @click="handleClick(item)"
    >
      {{ item }}
    </button>
    <div class="tab" :is="selectBtn"></div>
  </div>
</template>
<script>
import email from "@/components/tab/email";
import home from "@/components/tab/home";
import mine from "@/components/tab/mine";
export default {
  data() {
    return {
      buttons: ["email", "home", "mine"],
      //通过第三方进行标记
      selectBtn: "email",
    };
  },
  methods: {
    handleClick(item) {
      this.selectBtn = item;
    },
  },

  components: {
    email,
    home,
    mine,
  },
  mounted() {
    console.log("mount被夹在了");
  },
  // keep-alive的两个钩子函数
  activated() {
    console.log("组件被激活的时候");
  },
  deactivated() {
    console.log("组件被缓存的时候");
  },
};
</script>
<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: hotpink;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
h1 {
  margin: 0;
}
</style>
