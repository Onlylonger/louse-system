import { transformRecordToOption } from '@/utils/common';

export const enableStatusRecord: Record<Api.Common.EnableStatus, App.I18n.I18nKey> = {
  '1': 'common.enable',
  '2': 'common.disable'
};

export const enableStatusOptions = transformRecordToOption(enableStatusRecord);
