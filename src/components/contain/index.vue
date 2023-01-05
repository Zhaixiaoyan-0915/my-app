<template>
  <div id="app">
    <modal :val="isShow" @send="handleSend" @del="handleDel">
      <template v-slot:title>
        <p>充值</p>
      </template>
      <template v-slot:body>
        <p>是否充值10000点券？</p>
      </template>
    </modal>
    <button @click="handleClick">点击显示模态框</button>
  </div>
</template>
<script>
import mixModal from "../../mixins/mixModal";
export default {
  mixins: [mixModal],
};
</script>