<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
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
const router = useRouter();
const store = useStore();
let lists = store.state.lists;

onMounted(() => {
  // console.log(store.state);
  // addList();
});
function addList() {
  store.dispatch("addToLists", {
    id: lists.length + 1,
    title: "Testing Shopping List" + lists.length,
    list: [{ name: "test" }],
  });
}
function openList(id: number, title: string, list: object) {
  router.push({
    path: `/single-list/${title
      .toLocaleLowerCase()
      .replaceAll(" ", "-")}/${id}`,
  });
}
</script>

<template>
  <div class="list-container">
    <div
      v-for="list in lists"
      :key="list.id"
      class="list-container__single-list"
      @click="openList(list.id, list.title, list)"
    >
      <span>{{ list.title }}</span>
    </div>
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
  // background-color: red;
  display: grid;
  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
  gap: 10px;
  width: 50%;
  justify-self: center;

  .list-container__single-list {
    width: 100%;
    max-width: 100%;
    height: 150px;
    background-color: $light-base-color;
    border-radius: 25px;
    padding: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
      transform: scale(0.9);
    }
  }
  .list-container__single-list--empty {
    @extend .list-container__single-list;
    background-color: #c9fff2b8;
    padding: 0 10px;
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
