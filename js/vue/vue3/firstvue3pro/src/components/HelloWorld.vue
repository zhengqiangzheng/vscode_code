<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="counter++">count is:</button>
    <p>
      {{ counter }}
    </p>
    <p>
      {{ doublecounter }}
    </p>
    <p ref="desc"></p>
  </div>
</template>

<script>
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { counter, doublecounter } = userCounter();
    const msg2 = ref("some message");
    //使用元素引用
    const desc = ref(null);
    // 侦听器
    watch(counter, (val, oldVal) => {
      const p = desc.value;
      p.textContent = `counter change form ${oldVal} to ${val}`;
    });

    // watch(counter, (val, oldVal) => {
    //   const p = desc.value;
    //   p.textContent = `counter change form ${oldVal} to ${val}`;
    // });

    return { counter, doublecounter, msg2, desc };
  },
};
function userCounter() {
  const data = reactive({
    counter: 1,
    doublecounter: computed(() => data.counter * 2),
  });
  let timer;
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  return toRefs(data);
}
</script>
