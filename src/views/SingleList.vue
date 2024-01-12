<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { io } from "socket.io-client";
const store = useStore();
const route = useRoute();
interface SingleList {
  name: string;
}
interface List {
  id: number;
  title: string;
  list: Array<SingleList>;
}

let list = ref<List>(store.getters.getList(Number(route.params.id)));

onMounted(() => {
  console.log("singleList");
});
</script>

<template>
  <div class="list__modal">
    <input type="text" class="list_modal--title" v-model="list.title" />
  </div>
</template>
<style lang="scss" scoped>
$base-color: #4fffd4;
$light-base-color: #c9fff2;
$dark-base-color: #007d5e;

.list__modal {
  font-family: "Lato", sans-serif;
  background-color: red;
  display: grid;
  width: 50%;
  // height: 50vh;
  justify-self: center;
}
</style>
