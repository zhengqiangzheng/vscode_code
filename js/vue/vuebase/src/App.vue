<template>
  <div id="app">
    <!-- <HelloWorld /> -->

    <MyComponent @myEvent="doSomething">
      <!-- 具名插槽 给插槽 取名字 -->
      <template v-slot:header>
        <p>我是头部</p>
      </template>
      <h2>副标题</h2>
      <h1>主标题</h1>
      <p>{{msg}}</p>
      <template v-slot:footer>
        <p>我是底部</p>
      </template>
      <!-- 作用域插槽 使用 子组件给的 值 -->
      <template #dataSlot="slotProps">{{slotProps.currentData}}</template>
    </MyComponent>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <button @click="changeComponent">changeComponent</button>
    <!-- 读取 根元素的 信息 -->
    <h4>{{$root.msg}}</h4>
    <input v-focus type="text" />
    <p v-red>局部自定义指令</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import MyComponent from "./components/MyComponent";
import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// 异步引入组件 组件内容 很多时这样使用
const ComponentB = () => import("./components/ComponentB");
export default {
  name: "App",
  components: {
    HelloWorld,
    MyComponent,
    ComponentA,
    ComponentB
  },
  data() {
    return {
      msg: "hello",
      currentComponent: "ComponentA"
    };
  },
  methods: {
    doSomething(data) {
      console.log(data);
    },
    changeComponent() {
      if (this.currentComponent == "ComponentA") {
        this.currentComponent = "ComponentB";
      } else {
        this.currentComponent = "ComponentA";
      }
    }
  },
  directives: {
    red: {
      inserted(el) {
        el.style.color = "red";
      }
    }
  }
};
</script>

<style></style>
