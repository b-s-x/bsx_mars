<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import { animationCardList } from '../../hooks/animation/index';
import landingConceptGIF from '../../assets/media/landing_concept.gif';

onMounted(() => animationCardList('.card_container'))

</script>

<template>
  <div class="box">
    <Header />
    <div class="card_container">
      <Card class="card">
        <img
          class="card_img"
          :src="landingConceptGIF"
          alt="landing_concept"
        >
      </Card>
    </div>
  </div>
</template>

<style lang="scss">

.card {
  height: 300px;
  width: 500px;

  &_container {
    opacity: 0;
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    margin: 20px 50px;
    gap: 20px 40px;
    display: none;
    place-items: center;
  }

  &_img {
    width: 100%;
    height: 100%;
    border-radius: 35px;
    overflow: hidden;
  }
}


</style>
