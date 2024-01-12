<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function stepTo(step: number) {
  router.go(step);
}
</script>

<template>
  <div class="navbar">
    <button @click="stepTo(-1)">Back</button>
    <span class="navbar__title">lister</span>
  </div>
</template>
<style scoped lang="scss">
$base-color: #4fffd4;
$dark-base-color: #007d5e;

.navbar {
  font-family: "Lato", sans-serif;
  max-width: 100%;
  height: 50px;
  background-color: $base-color;
  display: grid;
  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin-bottom: 5px;
  button {
    justify-self: start;
  }

  .navbar__title {
    margin: 0;
    font-weight: bold;
    color: $dark-base-color;
    letter-spacing: 8px;
    justify-self: center;
  }

  .navbar__btn {
    font-family: "Lato", sans-serif;
    background: none;
    color: $dark-base-color;
    border: 2px solid $dark-base-color;
    cursor: pointer;
    padding: 5px 5px;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.3s all;
    border-radius: 25px;

    &:hover {
      background-color: $dark-base-color;
      color: $base-color;
    }
  }
}
</style>
