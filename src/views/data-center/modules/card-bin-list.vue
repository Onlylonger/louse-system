<script setup lang="ts">
import { ref } from 'vue';
import CardBin from './card-bin.vue';

const props = defineProps<{
  data: any;
}>();

const activeName = ref(0);

defineOptions({ name: 'DataCentereCardBinList' });
</script>

<template>
  <ElCollapse v-model="activeName" accordion>
    <ElCollapseItem v-for="(item, key) in props.data" :key="key" :title="`CREDIT${key + 1}`" :name="key">
      <CardBin :card="item.card" :data="item.binDataList" />
    </ElCollapseItem>
  </ElCollapse>
</template>
