<script setup lang="ts">
import Detail from './detail.vue';
import type { CardProps } from './card.vue';
import Card from './card.vue';

defineOptions({ name: 'DataCentereCardBin' });

const props = defineProps<{
  data: any;
  card: CardProps['data'];
}>();
</script>

<template>
  <div class="flex gap-10px">
    <Card class="flex-shrink-0" :data="props.card" />
    <Detail class="flex-1" show-border :data="props.data" />
  </div>
</template>
