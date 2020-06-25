<template>
  <div id="app">
    <UserList />
    <Chat />
  </div>
</template>

<script>
import Chat from "./components/Chat";
import UserList from "./components/UserList";

export default {
  name: "App",
  components: {
    UserList,
    Chat
  },
  data() {
    return {
      userList: [
        { userName: "小明", avater: require("./assets/first.jpeg") },
        { userName: "小红", avater: require("./assets/second.png") },
        { userName: "小白", avater: require("./assets/3.jpeg") },
        { userName: "小李", avater: require("./assets/4.jpeg") },
        { userName: "小红", avater: require("./assets/5.jpeg") }，
        { userName: "小绿", avater: require("./assets/6.jpeg") }
      ]
    };
  }
};
</script>

<style>
</style>
