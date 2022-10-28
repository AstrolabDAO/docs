import { useDark } from '@vueuse/core';

export const isDark = useDark({
  storageKey: 'astrolab-admin-color-scheme',
  valueLight: 'light',
});
