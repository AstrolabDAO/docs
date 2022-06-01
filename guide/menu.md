# menu

Project menu configuration store

::: tip prompt

The menu must be matched with the routing to display

:::

## menu item type

```ts
export interface Menu {
  name: string;
  icon?: string;
  path: string;
  disabled?: boolean;
  children?: Menu[];
  tag: {
    dot: boolean;
    content: string';
    type: 'error' | 'primary' | 'warn' | 'success';
  };
  hideMenu?: boolean;
}
```
## menu module

A menu file will be regarded as a module

::: tip prompt

Children’s Path field does not need to start with `/`
:::

```ts
import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: t('routes.dashboard.dashboard'),
    path: '/dashboard',

    children: [
      {
        path: 'analysis',
        name: t('routes.dashboard.analysis'),
      },
      {
        path: 'workbench',
        name: t('routes.dashboard.workbench'),
      },
    ],
  },
};
export default menu;
```
The above modules will be converted into the following structure

```ts
[
  path: '/dashboard',
  name: t('routes.dashboard.dashboard'),
  children: [
    {
      path: 'dashboard/analysis',
      name: t('routes.dashboard.analysis'),
    },
    {
      path: 'dashboard/workbench',
      name: t('routes.dashboard.workbench'),
    },
  ],
]
```

## New menu

Directly in [SRC/Router/Menus/Modules] (https://github.com/astrolabfinance/tree/main/src/router/menus/modules.

No need to be Get startedd manually, and the files in [SRC/Router/Routes/Menus/Modules] (https://github.com/astrolabfinance/tree/main/src/router/Modules) will be automatically loaded.

## Menu sorting

In the menu module, set `orderNo` variables, the larger the value, the later in the sorting
