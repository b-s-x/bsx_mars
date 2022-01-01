<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  degrees: {
    type: [String, Number],
    default: 15,
  },
  initialTimeTransition: {
    type: String,
    default: '0.2'
  }
});

const { degrees, initialTimeTransition } = props;

const cardRef = ref(null);
const transform = ref('');
const transition = ref('');

const startRotate = (event: any): void => {
  if (!cardRef.value) return;

  const card: any = cardRef.value;
  const halfHeight: number = card.offsetHeight / 2;
  const halfWidth: number = card.offsetWidth / 2;

  const x: number = (event.offsetY - halfHeight) / Number(degrees);
  const y: number = (event.offsetX - halfWidth) / Number(degrees);

  transform.value = `rotateY(${y}deg) rotateX(${-x}deg)`;
  transition.value = `transform ${initialTimeTransition}s`;
};

const stopRotate = () => {
  transform.value = '';
  transition.value = 'transform 1s';
};
</script>

<template>
  <div
    class="card_box"
    @mousemove="startRotate"
    @mouseout="stopRotate"
    >
      <div
        ref="cardRef"
        class="card_item"
        :style="{transform, transition }"
      >
        <slot />
      </div>
    </div>
</template>

<style lang="scss">
@import '@common';

.card {
  &_box {
    perspective: 1000px;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  &_item {
    box-shadow: $card-shadow;
    height: 100%;
    box-shadow: $card-shadow;
    border-radius: 35px;
  }
}

</style>
