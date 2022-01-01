<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import { animationCardList } from '../../hooks/animation/index';

onMounted(() => animationCardList('.card_container'))

</script>

<template>
  <div class="box">
    <Header />
    <div class="card_container">
      <Card class="card" />
    </div>
  </div>
</template>

<style lang="scss">

.card {
  height: 300px;
  width: 300px;

  &_container {
    opacity: 0;
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    margin: 20px 50px;
    gap: 20px 40px;
    display: none;
  }
}

</style>
