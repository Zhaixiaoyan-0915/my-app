<template>
  <div>
    <button @click="flag = !flag">点击</button>
    <transition
      enter-active-class="animate__animated animate__lightSpeedInRight"
      leave-active-class="animate__animated animate__slideOutDown"
    >
      <div v-if="flag">你看不看的见我</div>
    </transition>
  </div>
</template>
<script>
import "animate.css";
export default {
  data() {
    return {
      flag: true,
    };
  },
};
</script>