<script setup lang="tsx">
import { ElCard } from 'element-plus';
// import { $t } from '@/locales';
import { ref } from 'vue';
import Search from './modules/search.vue';
import LineChart from './modules/line-chart.vue';

const searchParams = ref({});

const resetSearchParams = () => {
  //
};

const getDataByPage = () => {
  //
};

const firstData = [
  {
    label: '今日访问',
    icon: 'ion:people-sharp',
    number: 0
  },
  {
    label: '7日访问',
    icon: 'ic:baseline-mark-chat-read',
    number: 0
  },
  {
    label: '30日访问',
    icon: 'material-symbols:heart-check-rounded',
    number: 0
  },
  {
    label: '总访问',
    icon: 'material-symbols:stars',
    number: 0
  },
  {
    label: '今日填卡',
    icon: 'ion:people-sharp',
    number: 0
  },
  {
    label: '7日填卡',
    icon: 'ic:baseline-mark-chat-read',
    number: 0
  },
  {
    label: '30日填卡',
    icon: 'material-symbols:heart-check-rounded',
    number: 0
  },
  {
    label: '总填卡',
    icon: 'material-symbols:stars',
    number: 0
  }
];
</script>

<template>
  <div class="min-h-500px flex-col-stretch flex-shrink-0 gap-16px overflow-hidden lt-sm:overflow-auto">
    <Search v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <ElCard class="sm:flex-1-hidden card-wrapper">
      <ElRow :gutter="20">
        <ElCol v-for="(item, key) in firstData" :key="key" :lg="6" :md="12" :sm="12">
          <ElCard class="mb-4 h-75px">
            <div class="w-full flex justify-between">
              <span>{{ item.label }}</span>
              <ElTag type="info" class="border-none pl-1 pr-1" effect="light">
                <SvgIcon :icon="item.icon" class="text-16px" />
              </ElTag>
            </div>
            <div class="">
              <span>{{ item.number }}</span>
            </div>
          </ElCard>
        </ElCol>
      </ElRow>
      <ElCard class="mt-10">
        <div class="w-full flex justify-between">
          <span>分析概览</span>
          <ElTag type="info" effect="plain">30天活跃</ElTag>
        </div>
        <LineChart />
      </ElCard>
    </ElCard>
  </div>
</template>

<style scoped></style>
