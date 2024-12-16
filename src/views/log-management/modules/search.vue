<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/locales';
import { enableStatusOptions } from '@/constants/business';
import { translateOptions } from '@/utils/common';

const activeName = ref(['role-search']);

defineOptions({ name: 'DataCenterSearch' });

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const emit = defineEmits<Emits>();

const model = defineModel<Api.DataCenter.SearchParams>('model', {
  required: true
});

function reset() {
  emit('reset');
}

function search() {
  emit('search');
}
</script>

<template>
  <ElCard class="card-wrapper">
    <ElCollapse v-model="activeName">
      <ElCollapseItem :title="$t('common.search')" name="role-search">
        <ElForm :model="model" label-position="right" :label-width="80">
          <ElRow :gutter="24">
            <ElCol :lg="6" :md="8" :sm="12">
              <ElFormItem label="登录名" prop="assignedIP">
                <ElInput v-model="model.assignedIP" :placeholder="$t('common.pleaseInput')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :md="8" :sm="12">
              <ElFormItem label="状态" prop="frontType">
                <ElSelect v-model="model.frontType" :placeholder="$t('common.pleaseSelect')" clearable>
                  <ElOption
                    v-for="{ label, value } in translateOptions(enableStatusOptions)"
                    :key="value"
                    :label="label"
                    :value="value"
                  ></ElOption>
                </ElSelect>
              </ElFormItem>
            </ElCol>
            <ElCol :lg="12" :md="24" :sm="24">
              <ElSpace class="w-full justify-end" alignment="end">
                <ElButton @click="reset">
                  <template #icon>
                    <icon-ic-round-refresh class="text-icon" />
                  </template>
                  {{ $t('common.reset') }}
                </ElButton>
                <ElButton type="primary" plain @click="search">
                  <template #icon>
                    <icon-ic-round-search class="text-icon" />
                  </template>
                  {{ $t('common.search') }}
                </ElButton>
              </ElSpace>
            </ElCol>
          </ElRow>
        </ElForm>
      </ElCollapseItem>
    </ElCollapse>
  </ElCard>
</template>

<style scoped></style>
