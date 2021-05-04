<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="data.counter++">count is:</button>
    <p>
      {{ counter }}
    </p>
    <p>
      {{ doublecounter }}
    </p>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { counter, doublecounter } = userCounter();
    const msg2 = ref("some message");
    return { counter, doublecounter, msg2 };
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
