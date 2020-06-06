<template>
  <div>
    <h1>My Component</h1>
    <p>{{ str }}</p>
    <button @click="sendMsgHandler">1233</button>
    <slot name="header"></slot>
    <slot>
      插槽的 默认 内容
      如果 父组件 没有 传 内容 过来 使用 默认内容
    </slot>
    <slot name="footer"></slot>
    <slot name="dataSlot" :currentData="currentData"></slot>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      str: "",
      currentData: "准备好的数据"
    };
  },
  methods: {
    sendMsgHandler() {
      this.$emit("myEvent", "hello");
    }
  }
};
</script>

<style scoped></style>>
