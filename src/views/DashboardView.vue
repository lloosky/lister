<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";

import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import { io } from "socket.io-client";
import gsap from "gsap";

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
interface SingleList {
  name: string;
}
interface List {
  id: number;
  list: Array<SingleList>;
}

let lists = ref<Array<List>>([]);

onMounted(() => {
  // console.log(lists);
});
function addList() {
  lists.value.push({
    id: 1,
    list: [{ name: "test" }],
  });
}
</script>

<template>
  <NavBar />
  <div class="list-container">
    <div
      v-for="list in lists"
      :key="list.id"
      class="list-container__single-list"
    ></div>
    <div @click="addList" class="list-container__single-list--empty">
      <div class="content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="35px"
          id="Layer_1"
          style="enable-background: new 0 0 32 32"
          version="1.1"
          viewBox="0 0 32 32"
          width="35px"
          xml:space="preserve"
        >
          <path
            fill="#007d5e"
            d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$base-color: #4fffd4;
$light-base-color: #c9fff2;
$dark-base-color: #007d5e;

.list-container {
  font-family: "Lato", sans-serif;
  height: 100vh;
  max-height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  .list-container__single-list {
    width: 300px;
    max-width: 100%;
    height: 600px;
    background-color: $light-base-color;
    margin: 5px;
    display: inline-block;
    border-radius: 25px;
    vertical-align: top;
  }

  .list-container__single-list--empty {
    @extend .list-container__single-list;
    background-color: #c9fff2b8;
    padding: 0 10px;
    cursor: pointer;
    transition: 0.3s all;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      transform: scale(0.9);
    }
  }
}
</style>
