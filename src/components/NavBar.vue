<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <span class="navbar__title">lister</span>
    <button class="navbar__btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        height="20px"
        id="Layer_1"
        style="enable-background: new 0 0 32 32"
        version="1.1"
        viewBox="0 0 32 32"
        width="20px"
        xml:space="preserve"
      >
        <path
          fill="#007d5e"
          d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"
        />
      </svg>
    </button>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 5px;

  .navbar__title {
    margin: 0;
    font-weight: bold;
    color: $dark-base-color;
    letter-spacing: 8px;
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
