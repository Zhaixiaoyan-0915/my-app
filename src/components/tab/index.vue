<template>
  <fieldset>
    <legend>tab栏切换</legend>
    <button
      :class="['tab-button', { active: selectBtn === item }]"
      v-for="item in buttons"
      :key="item"
      @click="handleClick(item)"
    >
      {{ item }}
    </button>
    <div class="tab" :is="dynamic">1234</div>
  </fieldset>
</template>

<script>
import email from "./email.vue";
import home from "./home.vue";
import mine from "./mine.vue";
export default {
  data() {
    return {
      buttons: ["email", "home", "mine"],
      selectBtn: "email",
    };
  },
  methods: {
    handleClick(item) {
      this.selectBtn = item;
      console.log(item);
    },
  },
  computed: {
    dynamic() {
      return this.selectBtn + "-com";
    },
  },
  components: {
    "email-com": email,
    "home-com": home,
    "mine-com": mine,
  },
};
</script>
<style scoped>
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