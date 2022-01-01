<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationHeader } from '../hooks/animation/index';

onMounted(() => useAnimationHeader(
  '.header_item',
  '.header_container',
  '.header_box',
))

</script>

<template>
  <div class="header_container">
    <div class="header_box">
      <div class="header_item">
        BSX_MARS
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@common";

.header {
  &_container {
    background: black;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  &_box {
    font-family: "Black Ops One";
    font-size: 200px;
    // position: absolute;
    // top: 50%;
    // width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }

  &_item {
    color: white;
    padding-left: 50px;
  }
}

</style>
