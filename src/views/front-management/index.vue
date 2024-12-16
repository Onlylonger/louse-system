<script setup lang="tsx">
import { ElCard } from 'element-plus';
import { ref } from 'vue';
import Logo from '@/assets/imgs/logo.png';
import ConfigForm from './modules/config-form.vue';

const dialogTableVisible = ref(false);
const dialogConfigVisible = ref(false);

const currentData = ref<{
  id?: string;
}>({});

const configFormData = ref<Api.FrontManagement.ConfigForm>({});

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }
];

const firstData = [
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  },
  {
    logo: Logo,
    label: '亚马逊包裹(英语)',
    officialUrl: 'https://www.amazon.com/',
    subLabel: '亚马逊包裹(英语)',
    selfHostList: [
      {
        url: 'abb.inlegalcasdinf.com/DDSKFJSDF'
      }
    ]
  }
];

const handleConfig = (id: string) => {
  dialogConfigVisible.value = true;
  currentData.value.id = id;
};
</script>

<template>
  <div class="min-h-500px flex-col-stretch flex-shrink-0 gap-16px overflow-hidden lt-sm:overflow-auto">
    <div class="flex justify-end gap-3">
      <ElButton type="primary" @click="dialogTableVisible = true">
        <icon-material-symbols-add-circle class="mr-2 text-16px" />
        安装新前台
      </ElButton>
      <ElButton>
        <icon-material-symbols-sync class="mr-2 text-16px" />
        刷新配置
      </ElButton>
    </div>
    <div class="sm:flex-1-hidden card-wrapper">
      <ElRow :gutter="20">
        <ElCol v-for="(item, key) in firstData" :key="key" :lg="6" :md="12" :sm="12">
          <ElCard class="mb-4 border-none shadow-xl">
            <div class="flex flex-col gap-2">
              <div class="w-full flex justify-between">
                <img :src="item.logo" alt="log" class="h-60px w-60px rounded-full" />
                <ElSpace>
                  <ElButton type="primary" @click="handleConfig(item.officialUrl)">配置</ElButton>
                  <ElButton>更新</ElButton>
                </ElSpace>
              </div>
              <p>{{ item.label }}</p>
              <p>{{ item.officialUrl }}</p>
              <p>{{ item.subLabel }}</p>
              <div class="border-1 rounded-md p-2">
                <p v-for="(host, hostKey) in item.selfHostList" :key="hostKey">{{ host.url }}</p>
              </div>
            </div>
          </ElCard>
        </ElCol>
      </ElRow>
    </div>
    <ElDialog v-model="dialogTableVisible" title="安装前台" width="800">
      <ElTable :data="gridData">
        <ElTableColumn property="date" label="Date" width="150" />
        <ElTableColumn property="name" label="Name" width="200" />
        <ElTableColumn property="address" label="Address" />
      </ElTable>
    </ElDialog>
    <ElDialog v-model="dialogConfigVisible" title="意大利包裹配置" width="70%">
      <ConfigForm v-model:model="configFormData" />
      <template #footer>
        <div class="dialog-footer">
          <ElButton @click="dialogConfigVisible = false">取消</ElButton>
          <ElButton type="primary" @click="dialogConfigVisible = false">确定</ElButton>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<style scoped></style>
