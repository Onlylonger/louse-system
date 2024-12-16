<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

defineOptions({ name: 'DataCentereDetail' });

interface DataItem {
  label: string;
  value: string;
  class?: string;
  onClick?: () => void;
  isTitle?: boolean;
}

const { copy, isSupported } = useClipboard();

async function handleCopy(item: DataItem) {
  const { label, value, onClick } = item;
  if (!isSupported) {
    window.$message?.error('您的浏览器不支持Clipboard API');
    return;
  }

  if (onClick) {
    onClick();
  }

  if (!value) return;

  await copy(value);
  window.$message?.success(`${label} 复制成功：${value}`);
}

const props = defineProps<{
  data: DataItem[];
  showBorder?: boolean;
}>();
</script>

<template>
  <ElCard class="h-full bg-transparent text-left" :class="{ 'border-none': !showBorder }">
    <slot name="opers"></slot>
    <p
      v-for="(item, index) in props.data"
      :key="index"
      class="min-h-10 flex items-center border-b-1 border-gray rounded-md border-dashed pl-2"
      :class="item.class ?? ''"
      @click="handleCopy(item)"
    >
      {{ item.label }}{{ !item.isTitle ? `: ${item.value}` : '' }}
    </p>
  </ElCard>
</template>
