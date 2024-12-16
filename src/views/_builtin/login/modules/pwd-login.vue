<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Lock, User } from '@element-plus/icons-vue';
import { $t } from '@/locales';
// import { loginModuleRecord } from '@/constants/app';
// import { useRouterPush } from '@/hooks/common/router';
import { useForm, useFormRules } from '@/hooks/common/form';
import { useAuthStore } from '@/store/modules/auth';
import { fetchCaptchaInfo } from '@/service/api';

defineOptions({ name: 'PwdLogin' });

const captchaData = ref<{
  captchaId?: string;
  captchaImg?: string;
  loading?: boolean;
}>({});

const refreshCaptchaInfo = () => {
  captchaData.value.loading = true;
  fetchCaptchaInfo()
    .then(res => {
      captchaData.value = {
        captchaId: res.data.captcha_id,
        captchaImg: res.data.captcha_img
      };
    })
    .finally(() => {
      captchaData.value.loading = false;
    });
};

onMounted(() => {
  refreshCaptchaInfo();
});

const authStore = useAuthStore();
// const { toggleLoginModule } = useRouterPush();
const { formRef, validate } = useForm();

interface FormModel {
  userName: string;
  password: string;
  captcha: string;
}

const model = ref<FormModel>({
  userName: 'laborer',
  password: 'cjalk87^%$al98',
  captcha: ''
});

const rules = computed<Record<keyof FormModel, App.Global.FormRule[]>>(() => {
  // inside computed to make locale ref, if not apply i18n, you can define it without computed
  const { formRules } = useFormRules();

  return {
    userName: formRules.userName,
    password: formRules.pwd,
    captcha: formRules.code
  };
});

async function handleSubmit() {
  await validate();
  await authStore.login({
    username: model.value.userName,
    password: model.value.password,
    captcha_solution: model.value.captcha,
    captcha_id: captchaData.value.captchaId ?? ''
  });
}

// type AccountKey = 'super' | 'admin' | 'user';

// interface Account {
//   key: AccountKey;
//   label: string;
//   userName: string;
//   password: string;
// }

// const accounts = computed<Account[]>(() => [
//   {
//     key: 'super',
//     label: $t('page.login.pwdLogin.superAdmin'),
//     userName: 'Super',
//     password: '123456'
//   },
//   {
//     key: 'admin',
//     label: $t('page.login.pwdLogin.admin'),
//     userName: 'Admin',
//     password: '123456'
//   },
//   {
//     key: 'user',
//     label: $t('page.login.pwdLogin.user'),
//     userName: 'User',
//     password: '123456'
//   }
// ]);

// async function handleAccountLogin(account: Account) {
//   await authStore.login(account.userName, account.password);
// }
</script>

<template>
  <ElForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <ElFormItem prop="userName">
      <ElInput
        v-model="model.userName"
        :placeholder="$t('page.login.common.userNamePlaceholder')"
        clearable
        :prefix-icon="User"
      />
    </ElFormItem>
    <ElFormItem prop="password">
      <ElInput
        v-model="model.password"
        type="password"
        show-password-on="click"
        show-password
        clearable
        :prefix-icon="Lock"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </ElFormItem>
    <ElFormItem prop="captcha">
      <div class="flex gap-4">
        <ElInput v-model="model.captcha" clearable :prefix-icon="Lock" placeholder="验证码" />
        <div v-loading="captchaData.loading" class="cursor-pointer text-right" @click="refreshCaptchaInfo">
          <img v-if="captchaData.captchaImg" :src="captchaData.captchaImg" class="size-full" alt="captcha" />
        </div>
      </div>
    </ElFormItem>
    <ElSpace direction="vertical" :size="24" class="mb-4 mt-4 w-full" fill>
      <!--
 <div class="flex-y-center justify-between">
        <ElCheckbox>{{ $t('page.login.pwdLogin.rememberMe') }}</ElCheckbox>
        
 <ElButton text @click="toggleLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </ElButton> 

      </div> 
-->
      <ElButton type="primary" size="large" round block :loading="authStore.loginLoading" @click="handleSubmit">
        {{ $t('route.login') }}
      </ElButton>
      <!--
 <div class="flex-y-center justify-between gap-12px">
        <ElButton class="flex-1" size="default" @click="toggleLoginModule('code-login')">
          {{ $t(loginModuleRecord['code-login']) }}
        </ElButton>
        <ElButton class="flex-1" size="default" @click="toggleLoginModule('register')">
          {{ $t(loginModuleRecord.register) }}
        </ElButton>
      </div> 
-->
      <!--
 <ElDivider class="text-14px text-#666 !m-0">{{ $t('page.login.pwdLogin.otherAccountLogin') }}</ElDivider>
      <div class="flex-center gap-12px">
        <ElButton
          v-for="item in accounts"
          :key="item.key"
          size="default"
          type="primary"
          @click="handleAccountLogin(item)"
        >
          {{ item.label }}
        </ElButton>
      </div> 
-->
    </ElSpace>
  </ElForm>
</template>

<style scoped></style>
