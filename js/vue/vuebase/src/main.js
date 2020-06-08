// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
//全局 定义 指令
Vue.directive("focus", {
    inserted: el => {
        el.focus();
    }
});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    data: {
        msg: "root message"
    },
    components: { App },
    template: "<App/>"
});
