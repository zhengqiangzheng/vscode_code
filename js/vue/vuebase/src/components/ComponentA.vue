<template>
  <div>
    componentA
    <p>{{msg}}</p>
    <button @click="handleClickSelf">click me</button>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      msg: "hello world"
    };
  },
  methods: {
    handleClickSelf() {
      this.msg = "hello world !!!";
    }
  }
};
</script>

<style>
</style>