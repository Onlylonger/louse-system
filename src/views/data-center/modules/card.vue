<script setup lang="ts">
import BgPng from '../assets/bg.png';

defineOptions({ name: 'DataCentereCard' });

export interface CardProps {
  data: {
    number: string;
    holder: string;
    cvv: string;
    expires: string;
  };
}

const props = defineProps<CardProps>();
</script>

<template>
  <div
    class="relative ml-auto mr-auto h-300px w-500px rounded-3xl bg-center bg-no-repeat pt-10 text-light"
    :style="{ backgroundImage: `url(${BgPng})` }"
  >
    <img src="../assets/left.png" class="absolute left-20px top-24px" alt="b" />
    <img src="../assets/right.png" class="absolute right-20px top-24px" alt="visa" />
    <p class="absolute left-50% top-50% -translate-x-50% -translate-y-50%">{{ props.data.number }}</p>
    <div class="absolute bottom-55px left-30px flex gap-70px">
      <div>
        <p>Card Holder</p>
        <p>{{ props.data.holder }}</p>
      </div>
      <div>
        <p>CVV</p>
        <p>{{ props.data.cvv }}</p>
      </div>
      <div>
        <p>Expires</p>
        <p>{{ props.data.expires }}</p>
      </div>
    </div>
  </div>
</template>
