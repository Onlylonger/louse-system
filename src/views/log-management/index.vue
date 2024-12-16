<script setup lang="tsx">
import { ElButton, ElCard, ElPopconfirm } from 'element-plus';
import { fetchGetDataCenterList } from '@/service/api';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { $t } from '@/locales';
import Search from './modules/search.vue';

const { columns, data, loading, getData, getDataByPage, mobilePagination, searchParams, resetSearchParams } = useTable({
  apiFn: fetchGetDataCenterList,
  apiParams: {
    current: 1,
    size: 10
  },
  columns: () => [
    {
      prop: 'index',
      label: '编号'
    },
    {
      prop: 'type',
      label: '类型'
    },
    {
      prop: 'title',
      label: '标题'
    },
    {
      prop: 'request',
      label: '请求地址'
    },
    {
      prop: 'request',
      label: '请求地址'
    },
    {
      prop: 'detail',
      label: '详情'
    },
    {
      prop: 'time',
      label: '请求时间'
    },
    {
      prop: 'operate',
      label: $t('common.operate'),
      width: 130,
      formatter: row => (
        <div class="flex-center">
          <ElPopconfirm title={$t('common.confirmDelete')} onConfirm={() => handleDelete(row.id)}>
            {{
              reference: () => (
                <ElButton type="danger" plain size="small">
                  {$t('common.delete')}
                </ElButton>
              )
            }}
          </ElPopconfirm>
        </div>
      )
    }
  ]
});

const {
  onDeleted
  // closeDrawer
} = useTableOperate(data, getData);

function handleDelete(id: number) {
  // request
  console.log(id);

  onDeleted();
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch flex-shrink-0 gap-16px overflow-hidden lt-sm:overflow-auto">
    <Search v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <ElCard class="sm:flex-1-hidden card-wrapper">
      <template #header>
        <div class="flex items-center justify-between">
          <p>{{ $t('common.list') }}</p>
          <TableHeaderOperation :loading="loading" @refresh="getData">
            <template #default>
              <ElPopconfirm :title="$t('page.dataCenter.clearData')" @confirm="() => {}">
                <template #reference>
                  <ElButton type="danger" plain>
                    <template #icon>
                      <icon-ic-round-delete class="text-icon" />
                    </template>
                    {{ $t('page.dataCenter.clearData') }}
                  </ElButton>
                </template>
              </ElPopconfirm>
            </template>
          </TableHeaderOperation>
        </div>
      </template>
      <div class="h-[calc(100%-48px)]">
        <ElTable
          v-loading="loading"
          height="100%"
          cell-class-name="!align-baseline"
          class="sm:h-full"
          :data="data"
          row-key="id"
        >
          <ElTableColumn v-for="col in columns" :key="col.prop" v-bind="col" />
        </ElTable>
        <div class="mt-20px flex justify-end">
          <ElPagination
            v-if="mobilePagination.total"
            layout="sizes,prev,pager,next"
            v-bind="mobilePagination"
            @current-change="mobilePagination['current-change']"
            @size-change="mobilePagination['size-change']"
          />
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style scoped></style>
