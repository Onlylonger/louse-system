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
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.assignedNumber')" prop="assignedNumber">
                <ElInput v-model="model.assignedNumber" :placeholder="$t('common.pleaseInput')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.assignedDomain')" prop="assignedDomain">
                <ElInput v-model="model.assignedDomain" :placeholder="$t('common.pleaseInput')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.assignedCardId')" prop="assignedCardId">
                <ElInput v-model="model.assignedCardId" :placeholder="$t('common.pleaseInput')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.cardType')" prop="cardType">
                <ElSelect v-model="model.cardType" :placeholder="$t('common.pleaseSelect')" clearable>
                  <ElOption
                    v-for="{ label, value } in [
                      { label: 'D卡', value: 2 },
                      { label: 'C卡', value: 1 }
                    ]"
                    :key="value"
                    :label="label"
                    :value="value"
                  ></ElOption>
                </ElSelect>
              </ElFormItem>
            </ElCol>
          </ElRow>
          <ElRow :gutter="24">
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.frontType')" prop="frontType">
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
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.filerAddress')" prop="filerAddress">
                <ElSwitch v-model="model.filerAddress" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.filerCard')" prop="filerCard">
                <ElSwitch v-model="model.filerCard" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.filerCAPTCHA')" label-width="90" prop="filerCAPTCHA">
                <ElSwitch v-model="model.filerCAPTCHA" />
              </ElFormItem>
            </ElCol>
          </ElRow>
          <ElRow :gutter="24">
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.cardHeadFiltration')" prop="cardHeadFiltration">
                <ElInput v-model="model.cardHeadFiltration" :placeholder="$t('common.pleaseInput')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.infoFiltration')" prop="infoFiltration">
                <ElInput v-model="model.infoFiltration" :placeholder="$t('common.pleaseInput')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.assignedIP')" prop="assignedIP">
                <ElInput v-model="model.assignedIP" :placeholder="$t('common.pleaseInput')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.createTime')" prop="createTime">
                <ElDatePicker
                  v-model="model.createTime"
                  type="daterange"
                  :range-separator="$t('common.to')"
                  :start-placeholder="$t('common.startTime')"
                  :end-placeholder="$t('common.endTime')"
                />
              </ElFormItem>
            </ElCol>
          </ElRow>
          <ElRow :gutter="24">
            <ElCol :lg="6" :sm="12">
              <ElFormItem :label="$t('page.dataCenter.updateTime')" prop="updateTime">
                <ElDatePicker
                  v-model="model.updateTime"
                  type="daterange"
                  :range-separator="$t('common.to')"
                  :start-placeholder="$t('common.startTime')"
                  :end-placeholder="$t('common.endTime')"
                />
              </ElFormItem>
            </ElCol>
          </ElRow>
          <ElRow :gutter="24">
            <ElCol :lg="24" :md="24" :sm="24">
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
