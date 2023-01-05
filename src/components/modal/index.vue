<template>
  <div class="marsk" key="div" v-if="val">
    <div class="modal-wrap">
      <div class="title">
        <slot name="title">提示</slot>
      </div>
      <div class="body">
        <slot name="body">提示内容</slot>
      </div>
      <div class="footer">
        <button class="del" @click="cancel">取消</button>
        <button class="confirm" @click="confirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    confirm() {
      this.$emit("send");
    },
    cancel() {
      this.$emit("del");
    },
  },
};
</script>


<style scoped>
.marsk {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-wrap {
  border-radius: 10px;
  background-color: #fff;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid #ccc; */
}

.marsk .title,
.marsk .footer,
.marsk .body {
  margin: 20px 0;
}

button {
  outline: none;
  border: 0;
  width: 100px;
  height: 40px;
  background: linear-gradient(90deg, #1596fb, #002dff);
  border-radius: 0.28571429rem;
  /* display: block; */

  color: #fff;
  cursor: pointer;
}

.footer {
  width: 100%;
  text-align: center;
}

.footer button {
  margin-left: 20px;
}

.del {
  background-image: linear-gradient(90deg, #fb1565, #ff00cc);
}
button:hover {
  background-image: linear-gradient(90deg, #aebaac, #57da23);
}
</style>