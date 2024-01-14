<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { io } from "socket.io-client";

const store = useStore();
const route = useRoute();

interface SingleList {
  id: number;
  name: string;
}
interface List {
  id: number;
  title: string;
  list: Array<SingleList>;
}

let list = ref<List>(store.getters.getList(Number(route.params.id)));
let elementName = ref<string>("");
let isShoppingList = ref<boolean>(false);

onMounted(() => {
  console.log("singleList");
});
function addPositionToList() {
  list.value.list.push({
    id: 123,
    name: elementName.value,
  });
  elementName.value = "";
}
function checked() {
  console.log(isShoppingList.value);
}
</script>

<template>
  <div class="list__modal">
    <label for="title" class="list__modal--title-label">List title</label>
    <input
      name="title"
      type="text"
      class="list__modal--title"
      v-model="list.title"
    />
    <div class="list__modal--options">
      <div>
        <label for="elementName" class="list__modal--title-label"
          >Add element</label
        >
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          v-model="isShoppingList"
          @click="checked"
        />
      </div>
      <div>
        <input
          name="elementName"
          type="text"
          class="list__modal--title"
          v-model="elementName"
        />
        <button @click="addPositionToList">add to list</button>
      </div>
    </div>
    <div class="list__modal--list-element-container">
      <div
        v-for="element in list.list"
        :key="element.id"
        class="list__modal--list-element"
      >
        <button class="list__element--btn--check">check</button>
        <span>{{ element.name }}</span>
        <button class="list__element--btn--remove">remove</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$base-color: #4fffd4;
$light-base-color: #c9fff2;
$dark-base-color: #007d5e;

.list__modal {
  font-family: "Lato", sans-serif;
  background-color: #c9fff29e;
  display: grid;
  width: 50%;
  // height: 50vh;
  justify-self: center;
  padding: 10px;
  .list__modal--title-label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .list__modal--title {
    padding: 5px;
    font-size: 1.2em;
    background-color: #ffffff9e;
    border: none;
    text-align: center;
  }
  .list__modal--list-element-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    .list__modal--list-element {
      display: grid;
      padding: 10px;
      background-color: #c9fff2;
      grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
      text-align: center;
      .list__element--btn--check {
        justify-self: start;
      }
      .list__element--btn--remove {
        justify-self: end;
      }
    }
  }
  .list__modal--options {
    display: grid;
    margin-top: 10px;
    div {
      display: grid;
      grid-template-columns: 80% 20%;
    }
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
}
</style>
