/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types';

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.blank$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.blank$view.404',
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.blank$view.500',
    meta: {
      title: '500',
      i18nKey: 'route.500',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'console',
    path: '/console',
    component: 'layout.base$view.console',
    meta: {
      title: 'console',
      i18nKey: 'route.console',
      icon: 'mdi:console',
      order: 2
    }
  },
  {
    name: 'data-center',
    path: '/data-center',
    component: 'layout.base$view.data-center',
    meta: {
      title: 'data-center',
      i18nKey: 'route.data-center',
      icon: 'material-symbols:deployed-code-account',
      order: 3
    }
  },
  {
    name: 'front-management',
    path: '/front-management',
    component: 'layout.base$view.front-management',
    meta: {
      title: 'front-management',
      i18nKey: 'route.front-management',
      icon: 'clarity:application-line',
      order: 4
    }
  },
  {
    name: 'general-config',
    path: '/general-config',
    component: 'layout.base$view.general-config',
    meta: {
      title: 'general-config',
      i18nKey: 'route.general-config',
      icon: 'icon-park-outline:config',
      order: 6
    }
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      icon: 'material-symbols:home-rounded'
    }
  },
  {
    name: 'iframe-page',
    path: '/iframe-page/:url',
    component: 'layout.base$view.iframe-page',
    props: true,
    meta: {
      title: 'iframe-page',
      i18nKey: 'route.iframe-page',
      constant: true,
      hideInMenu: true,
      keepAlive: true
    }
  },
  {
    name: 'log-management',
    path: '/log-management',
    component: 'layout.base$view.log-management',
    meta: {
      title: 'log-management',
      i18nKey: 'route.log-management',
      icon: 'fluent:calendar-record-28-regular',
      order: 5
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?',
    component: 'layout.blank$view.login',
    props: true,
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'user-management',
    path: '/user-management',
    component: 'layout.base$view.user-management',
    meta: {
      title: 'user-management',
      i18nKey: 'route.user-management'
    }
  }
];
