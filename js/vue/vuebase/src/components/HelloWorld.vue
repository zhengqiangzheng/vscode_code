<template>
    <div class="hello">
        hello ,{{ msg }}
        <div :class="isActive">Active</div>
        <ul>
            <li v-for="(item, index) in names" :key="index">{{ item }}</li>
        </ul>
        <ul>
            <li v-for="(item, name, index) in myObj" :key="index">
                {{ name }}:{{ item }}
            </li>
        </ul>
        <p>{{ reverseMessage }}</p>
        <input v-model="message" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            isActive: "Active",
            names: ["zs", "ls", "ww"],
            str: "zzqqqqqzhengeqeq",
            message: "",
            myObj: {
                name: "zs",
                age: 20,
                job: "tea"
            }
        };
    },
    computed: {
        reverseMessage() {
            return this.str
                .split("")
                .reverse()
                .join("");
        }
    },
    watch: {
        message(value) {
            if (value === "123") {
                alert(123);
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
