<script setup lang="ts">
import Card from '@/components/Card.vue';

</script>

<template>
  <div class="box">
    <Card class="card" />
  </div>
</template>

<style lang="scss">

.box {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 400px;
  height: 400px;
}
</style>
