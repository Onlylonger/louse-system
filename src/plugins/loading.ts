// @unocss-include
import { getRgb } from '@sa/color';
import { $t } from '@/locales';
import { localStg } from '@/utils/storage';
import systemLogo from '@/assets/svg-icon/logo.svg?raw';

export function setupLoading() {
  const themeColor = localStg.get('themeColor') || '#646cff';

  const { r, g, b } = getRgb(themeColor);

  const primaryColor = `--primary-color: ${r} ${g} ${b}`;

  const logoWithClass = systemLogo.replace('<svg', `<svg class="size-128px text-primary"`);

  const loading = `
<div class="fixed-center flex-col" style="${primaryColor}">
  ${logoWithClass}
  <h2 class="text-28px font-500 text-#646464">${$t('system.title')}</h2>
</div>`;

  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = loading;
  }
}
