import { request } from '../request';

export function fetchGetUserList(params?: Api.UserManagement.SearchParams) {
  return request<Api.UserManagement.ItemList>({
    url: '/api/v1/users',
    method: 'get',
    params
  });
}
