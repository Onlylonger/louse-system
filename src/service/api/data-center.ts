import { request } from '../request';

export function fetchGetDataCenterList(params: Api.DataCenter.SearchParams) {
  const {
    current,
    size,
    assignedDomain,
    assignedCardId,
    createTime,
    updateTime,
    assignedNumber,
    cardType,
    assignedIP,
    filerCAPTCHA,
    filerCard,
    cardHeadFiltration,
    frontType,
    filerAddress,
    infoFiltration
  } = params;

  return request<Api.DataCenter.ItemList>({
    url: '/api/v1/dataCenters/getList',
    method: 'post',
    data: {
      id: assignedNumber, // 指定编号：data.id
      frontDeskDomain: assignedDomain,
      cardNumber: assignedCardId,
      cardType,
      frontType, // 前台类型
      filerAddress, // 过滤地址：待定
      hasOrder: filerCard,
      smsCodeExist: filerCAPTCHA,
      cardNumberHeader: cardHeadFiltration,
      infoFiltration, // 信息过滤：待定
      ipAddress: assignedIP,
      createdAtStart: createTime?.[1],
      createdAtEnd: createTime?.[0],
      updatedAtStart: updateTime?.[0],
      updatedAtEnd: updateTime?.[1],
      current,
      size
    }
  });
}
