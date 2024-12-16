import { request } from '../request';

export function fetchLogin(data: Api.Auth.LoginParams) {
  return request<Api.Auth.LoginToken>({
    url: '/api/v1/users/login',
    method: 'post',
    data
  });
}

/** Get user info */
export function fetchGetUserInfo() {
  return request<Api.Auth.BackUserInfo>({ url: '/api/v1/users/userInfo' });
}

export function fetchRefreshToken(refreshToken: string) {
  return request<Api.Auth.LoginToken>({
    url: '/api/v1/users/refresh_token',
    method: 'post',
    data: {
      refreshToken
    }
  });
}

/**
 * return custom backend error
 *
 * @param code error code
 * @param msg error message
 */
export function fetchCustomBackendError(code: string, msg: string) {
  return request({ url: '/auth/error', params: { code, msg } });
}

export function fetchCaptchaInfo() {
  return request({ url: '/api/captcha' });
}
