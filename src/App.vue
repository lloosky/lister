<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import { io } from "socket.io-client";

// const socket = io('http://localhost:3000/');

// socket.on('RRR', (r: string) => {
//   console.log('R', r);
// });

// function test() {
//   socket.emit('test', 'nowa wiadomość');
// }
// onMounted(() => {
//   console.log("TESTTESTTEST");
// });
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;400&family=Noto+Sans&display=swap");

$base-color: #4fffd4;
$light-base-color: #c9fff2;
$dark-base-color: #007d5e;

* {
  box-sizing: border-box;
}
body {
  background: linear-gradient(135deg, black 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, black 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, black 25%, transparent 25%),
    linear-gradient(45deg, black 25%, transparent 25%);
  background-size: 2em 2em;
  background-color: #232323;
  margin: 0;
}

#app {
  max-width: 100%;
  display: grid;
}
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
