<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import { animationCardList } from '../../hooks/animation/index';
import landingConceptMP4 from '../../assets/media/landing_concept.mp4';

onMounted(() => animationCardList('.card_container'))

</script>

<template>
  <div class="box">
    <Header />
    <div class="card_container">
      <Card class="card">
        <video
          width="500"
          height="300"
          class="card_img"
          playsinline
          autoplay
          muted
          loop
        >
          <source
            :src="landingConceptMP4"
            type="video/mp4"
            alt="landing_concept"
          >
        </video>
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
