<script setup lang="ts">
import { ref } from 'vue';
import { Delete, Plus } from '@element-plus/icons-vue';

defineOptions({ name: 'ConfigForm' });

const model = defineModel<Api.FrontManagement.ConfigForm>('model', {
  required: true
});

const dynamicValidateForm = ref<any>({
  domains: [
    {
      key: 1,
      value: ''
    }
  ]
});

const addDomain = () => {
  dynamicValidateForm.value.domains.push({
    key: Date.now(),
    value: ''
  });
};

const removeDomain = (item: any) => {
  const index = dynamicValidateForm.value.domains.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.value.domains.splice(index, 1);
  }
};
</script>

<template>
  <ElForm :model="model" label-position="right" :label-width="80">
    <ElTabs type="border-card">
      <ElTabPane label="访问设置">
        <ElRow :gutter="20">
          <ElCol :lg="12" :md="12" :sm="24">
            <ElFormItem label="域名配置" prop="assignedNumber" label-position="top"></ElFormItem>
            <ElFormItem
              v-for="(domain, index) in dynamicValidateForm.domains"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              label-position="top"
              inline-message
              :rules="{
                required: true,
                message: '域名不能为空',
                trigger: 'blur'
              }"
            >
              <div class="w-full flex justify-between gap-3">
                <ElInput v-model="domain.value" class="w-90%" />
                <ElButton :icon="Delete" circle @click.prevent="removeDomain(domain)" />
                <!-- <ElButton class="" :icon="Delete" @click.prevent="removeDomain(domain)">删除</ElButton> -->
              </div>
            </ElFormItem>

            <ElButton class="w-full" :icon="Plus" @click="addDomain">添加域名</ElButton>
          </ElCol>
          <ElCol :lg="12" :md="12" :sm="24">
            <ElFormItem label="前台入口" prop="assignedNumber" label-position="top">
              <ElInput v-model="model.value" />
              <span class="text-sm text-gray">进入前台时使用这个入口</span>
            </ElFormItem>
            <ElFormItem label="IP白名单" prop="assignedNumber" label-position="top">
              <ElInputTag v-model="model.whileList" clearable />
              <span class="text-sm text-gray">如US、AR、GB等,只允许指定国家访问. 回车键添加内容</span>
            </ElFormItem>
            <ElFormItem label="IP黑名单" prop="assignedNumber" label-position="top">
              <ElInputTag v-model="model.blackList" clearable />
              <span class="text-sm text-gray">如US、AR、GB等,屏蔽指定国家访问. 回车键添加内容</span>
            </ElFormItem>
            <ElRow :gutter="20">
              <ElCol :lg="6" :md="12" :sm="24">
                <ElFormItem label="拦截爬虫" prop="assignedNumber" label-position="top">
                  <ElSwitch v-model="model.delivery" />
                </ElFormItem>
              </ElCol>
              <ElCol :lg="6" :md="12" :sm="24">
                <ElFormItem label="拦截电脑" prop="assignedNumber" label-position="top">
                  <ElSwitch v-model="model.pc" />
                </ElFormItem>
              </ElCol>
              <ElCol :lg="6" :md="12" :sm="24">
                <ElFormItem label="拦截IOS" prop="assignedNumber" label-position="top">
                  <ElSwitch v-model="model.ios" />
                </ElFormItem>
              </ElCol>
              <ElCol :lg="6" :md="12" :sm="24">
                <ElFormItem label="拦截Android" prop="assignedNumber" label-position="top">
                  <ElSwitch v-model="model.android" />
                </ElFormItem>
              </ElCol>
            </ElRow>
          </ElCol>
        </ElRow>
      </ElTabPane>
      <ElTabPane label="前台自定义">Config</ElTabPane>
    </ElTabs>
  </ElForm>
</template>

<style scoped></style>
