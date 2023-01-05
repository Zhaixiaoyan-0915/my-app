<template>
  <fieldset>
    <legend>混入</legend>
    <modal :val="isShow" @send="handleSend" @del="handleDel"></modal>
    <button @click="handleClick">点击显示</button>
  </fieldset>
</template>
<script>
import mixModal from "../../mixins/mixModal";
export default {
  mixins: [mixModal],
};
</script>